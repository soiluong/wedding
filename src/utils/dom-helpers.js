export const throttleEventListener = (type, name, obj = window) => {
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
};

export function optimizedResizeEventListener(eventHandler) {
  throttleEventListener('resize', 'optimizedResize');
  window.addEventListener('optimizedResize', eventHandler);
}

export function removeOptimizedResizeEventListener(eventHandler) {
  window.removeEventListener('optimizedResize', eventHandler);
}