import Bowser from "bowser";

export function isMobile() {
  if (typeof window === "undefined") {
    return false;
  }

  const ua = window.navigator.userAgent;

  return Bowser.parse(ua).platform.type === Bowser.PLATFORMS_MAP.mobile;
}
