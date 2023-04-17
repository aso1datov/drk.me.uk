import { memo, useCallback, useEffect, useRef } from "react";
import clsx from "clsx";
import {
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { LOGO_COLOR } from "../../constants/app";

import styles from "./index.module.scss";

type Props = {
  className?: string;
};

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

const material = new MeshBasicMaterial({
  side: DoubleSide,
  transparent: true,
  opacity: 0.6,
  color: LOGO_COLOR,
});

const renderer = new WebGLRenderer({
  alpha: true,
});

const dracoLoader = new DRACOLoader();
dracoLoader
  .setDecoderConfig({ type: "js" })
  .setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

const loader = new GLTFLoader();
loader.setPath("/models/").setDRACOLoader(dracoLoader);

function animate(mesh: Mesh) {
  requestAnimationFrame(animate.bind(null, mesh));
  mesh.rotation.y += 0.0025;

  renderer.render(scene, camera);
}

export const Background = memo<Props>(({ className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const setup = useCallback((init?: boolean) => {
    if (containerRef.current === null) {
      return;
    }

    const container = containerRef.current;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.position.z = 5;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.render(scene, camera);

    if (init) {
      container.appendChild(renderer.domElement);
    }
  }, []);

  const render = useCallback(() => {
    setup(true);

    loader.load("logo.glb", (gltf) => {
      scene.add(gltf.scene);
      scene.scale.set(1.5, 1.5, 1.5);

      const mesh = gltf.scene.children[0] as Mesh;
      mesh.material = material;

      animate(mesh);
    });
  }, [setup]);

  const onWindowResize = useCallback(() => setup(), [setup]);

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    render();

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [onWindowResize, render]);

  return (
    <div
      ref={containerRef}
      className={clsx(className, styles.container)}
      aria-hidden={true}
    />
  );
});
