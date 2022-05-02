import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import clsx from "clsx";
import { useDidMount } from "rooks";
import {
  Color,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import styles from "./index.module.scss";

type Props = {
  className?: string;
};

export const Background = memo<Props>(({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scene = useMemo(() => new Scene(), []);
  const camera = useMemo(() => new PerspectiveCamera(75, 1, 0.1, 2000), []);
  const loader = new GLTFLoader().setPath("/models/");
  const material = new MeshBasicMaterial({
    side: DoubleSide,
    transparent: true,
    opacity: 0.6,
    color: new Color(0xb1139b),
  });

  const renderer = useMemo(
    () =>
      new WebGLRenderer({
        alpha: true,
      }),
    []
  );

  function animate(mesh: Mesh) {
    requestAnimationFrame(animate.bind(null, mesh));
    mesh.rotation.y += 0.0025;

    renderer.render(scene, camera);
  }

  function init() {
    if (ref.current === null) {
      return;
    }

    loader.load("bb2.gltf", (gltf) => {
      gltf.scene.scale.set(1.5, 1.5, 1.5);
      scene.add(gltf.scene);

      const mesh = gltf.scene.children[0] as Mesh;
      mesh.material = material;

      animate(mesh);
    });

    // scene.add(cube);
    camera.aspect = ref.current.clientWidth / ref.current.clientHeight;
    camera.position.z = 5;
    camera.updateProjectionMatrix();

    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    ref.current.appendChild(renderer.domElement);
    renderer.render(scene, camera);
  }

  const onWindowResize = useCallback(() => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
  }, [camera, renderer, scene]);

  useDidMount(init);

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [onWindowResize]);

  return <div ref={ref} className={clsx(className, styles.container)} />;
});
