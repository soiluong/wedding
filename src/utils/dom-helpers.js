const isServer = () => typeof window === 'undefined';
const isClient = () => !isServer();

export const throttleEventListener = (type, name, obj) => {
  if (isClient()) {
    obj = obj || window;
    let running = false;
    const func = () => {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  }
};

export function optimizedResizeEventListener(eventHandler) {
  if (isClient()) {
    throttleEventListener('resize', 'optimizedResize');
    window.addEventListener('optimizedResize', eventHandler);
  }
}

export function removeOptimizedResizeEventListener(eventHandler) {
  if (isClient()) {
    window.removeEventListener('optimizedResize', eventHandler);
  }
}
