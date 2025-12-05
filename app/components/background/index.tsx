"use client";

import cc from "classcat";
import { memo, useCallback, useEffect, useRef } from "react";
import {
  DoubleSide,
  type Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { LOGO_COLOR } from "../../constants/app";

import styles from "./index.module.scss";

type Props = {
  className?: string;
};

const DECODER_PATH = "https://www.gstatic.com/draco/versioned/decoders/1.5.7/";

const Background = memo<Props>(({ className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const materialRef = useRef<MeshBasicMaterial | null>(null);
  const animationIdRef = useRef<number>(0);

  const setup = useCallback((init?: boolean) => {
    if (containerRef.current === null) {
      return;
    }

    const container = containerRef.current;

    if (!sceneRef.current) {
      sceneRef.current = new Scene();
    }

    if (!cameraRef.current) {
      cameraRef.current = new PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        2000
      );
    }

    if (!rendererRef.current) {
      rendererRef.current = new WebGLRenderer({
        alpha: true,
      });
    }

    if (!materialRef.current) {
      materialRef.current = new MeshBasicMaterial({
        side: DoubleSide,
        transparent: true,
        opacity: 0.6,
        color: LOGO_COLOR,
      });
    }

    const camera = cameraRef.current;
    const renderer = rendererRef.current;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.position.z = 5;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (init && sceneRef.current) {
      renderer.render(sceneRef.current, camera);
      container.appendChild(renderer.domElement);
    }
  }, []);

  const animate = useCallback((mesh: Mesh) => {
    mesh.rotation.y += 0.0025;

    if (sceneRef.current && cameraRef.current && rendererRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }

    animationIdRef.current = requestAnimationFrame(() => animate(mesh));
  }, []);

  const render = useCallback(() => {
    setup(true);

    const dracoLoader = new DRACOLoader();

    dracoLoader.setDecoderPath(DECODER_PATH);

    const loader = new GLTFLoader();

    loader.setPath("/models/").setDRACOLoader(dracoLoader);
    loader.load("logo.glb", (gltf) => {
      if (!sceneRef.current) return;

      sceneRef.current.add(gltf.scene);
      sceneRef.current.scale.set(1.5, 1.5, 1.5);

      const mesh = gltf.scene.children[0] as Mesh;
      // biome-ignore lint/style/noNonNullAssertion: material created above
      mesh.material = materialRef.current!;

      animate(mesh);
    });
  }, [setup, animate]);

  const onWindowResize = useCallback(() => {
    setup();
  }, [setup]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", onWindowResize);
      render();

      return () => {
        window.removeEventListener("resize", onWindowResize);

        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }

        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
        if (materialRef.current) {
          materialRef.current.dispose();
        }
      };
    }
  }, [onWindowResize, render]);

  return (
    <div
      ref={containerRef}
      className={cc([className, styles.container])}
      aria-hidden={true}
    />
  );
});

export default Background;
