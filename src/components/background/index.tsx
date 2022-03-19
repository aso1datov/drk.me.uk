import { memo, useMemo, useRef } from "react";
import clsx from "clsx";
import { useDidMount } from "rooks";
import {
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";

import styles from "./index.module.scss";

type Props = {
  className?: string;
};

export const Background = memo<Props>(({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scene = useMemo(() => new Scene(), []);
  const camera = useMemo(() => new PerspectiveCamera(75, 1, 0.1, 1000), []);
  const geometry = new SphereGeometry();
  const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  const cube = new Mesh(geometry, material);

  const renderer = new WebGLRenderer({
    alpha: true,
  });

  function init() {
    if (ref.current === null) {
      return;
    }

    scene.add(cube);
    camera.aspect = ref.current.clientWidth / ref.current.clientHeight;
    camera.position.z = 5;
    camera.updateProjectionMatrix();

    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    ref.current.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }

  useDidMount(init);

  return <div ref={ref} className={clsx(className, styles.container)} />;
});
