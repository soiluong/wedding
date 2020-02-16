const isServer = (): boolean => typeof window === 'undefined';
const isClient = (): boolean => !isServer();

export const throttleEventListener = (
  type: string,
  name: string,
  obj?: Window
): void => {
  if (isClient()) {
    obj = obj || window;
    let running = false;
    const func = (): void => {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(() => {
        obj && obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  }
};

export function optimizedResizeEventListener(eventHandler: Function): void {
  if (isClient()) {
    throttleEventListener('resize', 'optimizedResize');
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.addEventListener('optimizedResize', eventHandler);
  }
}

export function removeOptimizedResizeEventListener(
  eventHandler: Function
): void {
  if (isClient()) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.removeEventListener('optimizedResize', eventHandler);
  }
}
