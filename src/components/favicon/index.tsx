import { useRef } from "react";
import { useDidMount } from "rooks";

import { getRandomInteger } from "../../utils/get-random-integer";

export const Favicon = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useDidMount(() => {
    const favicon = document.getElementById("favicon") as HTMLLinkElement;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx || !favicon) {
      return;
    }

    const icon = new Image();
    const hue = getRandomInteger(0, 360);
    const saturation = getRandomInteger(30, 100);

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-in";

    icon.onload = () => {
      ctx.drawImage(icon, 0, 0);
      ctx.fillStyle = `hsl(${hue}deg ${saturation}% 50%)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      favicon.href = canvas.toDataURL();
    };

    icon.src = "/favicon.svg";
  });

  return <canvas ref={canvasRef} width="32" height="32" hidden={true} />;
};
