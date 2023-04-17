export function getInitialWindowPosition(element: HTMLElement) {
  let x = 0;
  let y = 0;
  const container = element.parentElement;

  if (container !== null) {
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;
    const windowCenterX = element.clientWidth / 2;
    const windowCenterY = element.clientHeight / 2;

    x = centerX - windowCenterX;
    y = centerY - centerY / 2 - windowCenterY;
  }

  return { x, y };
}
