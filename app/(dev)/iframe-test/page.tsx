"use client";

import cc from "classcat";
import {
  type ChangeEventHandler,
  type FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";

import styles from "./page.module.scss";

function IframeTest() {
  const [localStorageValue, setLocalStorageValue] = useState("");
  const [sessionStorageValue, setSessionStorageValue] = useState("");
  const [cookieValues, setCookieValues] = useState({});
  const [scriptResult, setScriptResult] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [debugInfo, setDebugInfo] = useState({});
  const [iframeInfo, setIframeInfo] = useState({});

  // Сбор отладочной информации

  const updateDebugInfo = useCallback(() => {
    const info = {
      timestamp: new Date().toISOString(),
      domain: window.location.hostname,
      origin: window.location.origin,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      screen: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      inIframe: window.self !== window.top,
      parentDomain: window.self !== window.top ? document.referrer : "none",
      localStorageKeys: Object.keys(localStorage),
      sessionStorageKeys: Object.keys(sessionStorage),
      cookieEnabled: navigator.cookieEnabled,
      javaEnabled: navigator.javaEnabled ? navigator.javaEnabled() : false,
      language: navigator.language,
      languages: navigator.languages,
    };
    setDebugInfo(info);

    // Информация об iframe
    if (window.self !== window.top) {
      setIframeInfo({
        isInIframe: true,
        iframeSize: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer,
        canAccessParent: typeof window.parent !== "undefined",
      });
    }
  }, []);

  const updateCookieInfo = useCallback(() => {
    const cookies = document.cookie
      .split(";")
      .reduce<Record<string, string>>((acc, cookie) => {
        const [name, value] = cookie.trim().split("=");

        if (name) {
          acc[name] = value || "true";
        }
        return acc;
      }, {});

    setCookieValues(cookies);
  }, []);

  // Тест LocalStorage
  useEffect(() => {
    const savedValue = localStorage.getItem("iframeTest");
    const sessionValue = sessionStorage.getItem("iframeSessionTest");
    if (savedValue) setLocalStorageValue(savedValue);
    if (sessionValue) setSessionStorageValue(sessionValue);
  }, []);

  const handleLocalStorageSave = () => {
    const value = `Test-${Date.now()}`;
    localStorage.setItem("iframeTest", value);
    setLocalStorageValue(value);
    updateDebugInfo();
  };

  const handleLocalStorageClear = () => {
    localStorage.removeItem("iframeTest");
    setLocalStorageValue("");
    updateDebugInfo();
  };

  const handleSessionStorageSave = () => {
    const value = `Session-${Date.now()}`;
    sessionStorage.setItem("iframeSessionTest", value);
    setSessionStorageValue(value);
    updateDebugInfo();
  };

  // Тест Cookies с различными настройками
  const setTestCookie = (type: string) => {
    const baseValue = `Cookie-${type}-${Date.now()}`;
    let cookieString = "";

    switch (type) {
      case "basic":
        cookieString = `iframeTestBasic=${baseValue}; path=/; max-age=3600`;
        break;
      case "samesite-lax":
        cookieString = `iframeTestLax=${baseValue}; path=/; max-age=3600; samesite=lax`;
        break;
      case "samesite-strict":
        cookieString = `iframeTestStrict=${baseValue}; path=/; max-age=3600; samesite=strict`;
        break;
      case "samesite-none":
        cookieString = `iframeTestNone=${baseValue}; path=/; max-age=3600; samesite=none; secure`;
        break;
      case "partitioned":
        cookieString = `iframeTestPartitioned=${baseValue}; path=/; max-age=3600; samesite=none; secure; partitioned`;
        break;
      case "domain":
        cookieString = `iframeTestDomain=${baseValue}; domain=${window.location.hostname}; path=/; max-age=3600`;
        break;
      case "subdomain": {
        const domain = window.location.hostname.replace(/^www\./, "");
        cookieString = `iframeTestSubdomain=${baseValue}; domain=.${domain}; path=/; max-age=3600`;
        break;
      }
      default:
        cookieString = `iframeTestDefault=${baseValue}; path=/; max-age=3600`;
    }

    document.cookie = cookieString;
    setScriptResult(`Установлена кука: ${cookieString}`);
    setTimeout(updateCookieInfo, 100);
  };

  const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
    setScriptResult("Все куки удалены");
    setTimeout(updateCookieInfo, 100);
  };

  // Тест выполнения скриптов
  const executeScript = () => {
    try {
      const result = `
        User Agent: ${navigator.userAgent}
        Platform: ${navigator.platform}
        Screen: ${screen.width}x${screen.height}
        Timestamp: ${new Date().toISOString()}
        Cookies: ${document.cookie}
        LocalStorage supported: ${typeof Storage !== "undefined"}
      `;
      setScriptResult(result);
    } catch (error) {
      setScriptResult(`Ошибка: ${(error as Error).message}`);
    }
  };

  // Тест отправки формы
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const result = `
      Форма отправлена!
      Имя: ${formData.name}
      Email: ${formData.email}
      Время: ${new Date().toLocaleString()}
      User Agent: ${navigator.userAgent}
    `;

    setScriptResult(result);

    // Имитация отправки на сервер
    console.log("Данные формы:", formData);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Тест геолокации
  const testGeolocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setScriptResult(`
            Геолокация успешна:
            Широта: ${position.coords.latitude}
            Долгота: ${position.coords.longitude}
            Точность: ${position.coords.accuracy}м
          `);
        },
        (error) => {
          setScriptResult(`Ошибка геолокации: ${error.message}`);
        },
        { timeout: 5000 },
      );
    } else {
      setScriptResult("Геолокация не поддерживается");
    }
  };

  // Тест запросов
  const testFetch = async (url = "https://httpbin.org/get") => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setScriptResult(`Fetch успешен: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setScriptResult(`Ошибка fetch: ${(error as Error).message}`);
    }
  };

  // Тест postMessage
  const testPostMessage = () => {
    if (window.self !== window.top) {
      window.parent.postMessage(
        {
          type: "TEST_MESSAGE",
          data: `Hello from iframe at ${new Date().toISOString()}`,
          origin: window.location.origin,
        },
        "*",
      );
      setScriptResult("Сообщение отправлено в родительское окно");
    } else {
      setScriptResult("Не в iframe - сообщение не отправлено");
    }
  };

  // Тест производительности
  const testPerformance = () => {
    const perf = `
      Performance API:
      Navigation: ${performance.navigation.type}
      Timing: 
        Load: ${performance.timing.loadEventEnd - performance.timing.navigationStart}ms
        DOM Content Loaded: ${performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart}ms
      Memory: ${performance.memory ? `Used: ${Math.round(performance.memory.usedJSHeapSize / 1048576)}MB` : "N/A"}
    `;
    setScriptResult(perf);
  };

  useEffect(() => {
    updateDebugInfo();
    updateCookieInfo();

    // Слушатель изменений в хранилищах
    window.addEventListener("storage", updateDebugInfo);

    return () => {
      window.removeEventListener("storage", updateDebugInfo);
    };
  }, [updateDebugInfo, updateCookieInfo]);

  return (
    <section className={styles.container}>
      <h1>🛠️ Тестовая страница для iframe</h1>

      <div className={styles.debugSection}>
        <h2>🔍 Отладочная информация</h2>
        <div className={styles.debugGrid}>
          <div>
            <strong>Домен:</strong> {debugInfo.domain}
          </div>
          <div>
            <strong>Origin:</strong> {debugInfo.origin}
          </div>
          <div>
            <strong>В iframe:</strong> {debugInfo.inIframe ? "✅ Да" : "❌ Нет"}
          </div>
          <div>
            <strong>Размер экрана:</strong> {debugInfo.screen}
          </div>
          <div>
            <strong>Viewport:</strong> {debugInfo.viewport}
          </div>
          <div>
            <strong>Cookies enabled:</strong>{" "}
            {debugInfo.cookieEnabled ? "✅ Да" : "❌ Нет"}
          </div>
        </div>

        {iframeInfo.isInIframe && (
          <div className={styles.iframeDebug}>
            <h3>📦 Информация об iframe</h3>
            <p>
              <strong>Размер iframe:</strong> {iframeInfo.iframeSize}
            </p>
            <p>
              <strong>Referrer:</strong> {iframeInfo.referrer}
            </p>
            <p>
              <strong>Доступ к parent:</strong>{" "}
              {iframeInfo.canAccessParent ? "✅ Есть" : "❌ Нет"}
            </p>
          </div>
        )}
      </div>

      <div className={styles.testSection}>
        <h2>💾 LocalStorage & SessionStorage</h2>
        <div className={styles.storageInfo}>
          <p>
            <strong>LocalStorage:</strong> {localStorageValue || "нет данных"}
          </p>
          <p>
            <strong>SessionStorage:</strong>{" "}
            {sessionStorageValue || "нет данных"}
          </p>
          <p>
            <strong>Все ключи LocalStorage:</strong>{" "}
            {debugInfo.localStorageKeys?.join(", ") || "нет"}
          </p>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={handleLocalStorageSave}
        >
          Сохранить в LocalStorage
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={handleLocalStorageClear}
        >
          Очистить LocalStorage
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={handleSessionStorageSave}
        >
          Сохранить в SessionStorage
        </button>
      </div>

      <div className={styles.testSection}>
        <h2>🍪 Cookies (различные настройки)</h2>
        <div className={styles.cookiesInfo}>
          <p>
            <strong>Текущие куки:</strong>
          </p>
          <pre>{JSON.stringify(cookieValues, null, 2)}</pre>
        </div>
        <div className={styles.cookieButtons}>
          <button
            type="button"
            className={styles.button}
            onClick={() => setTestCookie("basic")}
          >
            Basic Cookie
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => setTestCookie("samesite-lax")}
          >
            SameSite=Lax
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => setTestCookie("samesite-strict")}
          >
            SameSite=Strict
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => setTestCookie("samesite-none")}
          >
            SameSite=None
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => setTestCookie("partitioned")}
          >
            Partitioned
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => setTestCookie("domain")}
          >
            Domain-specific
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => setTestCookie("subdomain")}
          >
            Subdomain
          </button>
          <button
            type="button"
            className={cc([styles.button, styles.danger])}
            onClick={deleteAllCookies}
          >
            Удалить все куки
          </button>
        </div>
      </div>

      <div className={styles.testSection}>
        <h2>📝 Форма</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>
              Имя:
              <input
                className={styles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label className={styles.label}>
              Email:
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button type="submit">Отправить форму</button>
        </form>
      </div>

      <div className={styles.testSection}>
        <h2>⚡ Выполнение скриптов и API</h2>
        <div className="scriptButtons">
          <button
            type="button"
            className={styles.button}
            onClick={executeScript}
          >
            Информация о браузере
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={testGeolocation}
          >
            Тест геолокации
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => testFetch()}
          >
            Тест Fetch (httpbin)
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => testFetch(window.location.origin)}
          >
            Тест Fetch (same-origin)
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={testPostMessage}
          >
            Тест postMessage
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={testPerformance}
          >
            Тест производительности
          </button>
        </div>
      </div>

      <div className={styles.testSection}>
        <h2>📊 Результаты</h2>
        <pre className="results">
          {scriptResult || "Нажмите кнопки выше для тестирования..."}
        </pre>
      </div>
    </section>
  );
}

export default IframeTest;
