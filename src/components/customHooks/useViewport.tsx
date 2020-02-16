import { useEffect, useState } from 'react';

import { optimizedResizeEventListener } from 'utils/dom-helpers';

let width = 0;
let height = 0;
const listeners: Function[] = [];

function updateViewportSize(): void {
  if (typeof document !== 'undefined') {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;

    listeners.forEach(callback => callback(width, height));
  }
}

function addListener(callback: Function): void {
  listeners.push(callback);
}

function removeListeners(callback: Function): void {
  const index = listeners.indexOf(callback);

  if (index > -1) {
    listeners.splice(index, 1);
  }
}

optimizedResizeEventListener(updateViewportSize);
updateViewportSize();

interface ReturnType {
  viewportWidth: number;
  viewportHeight: number;
}
export default function useViewport(): ReturnType {
  const [viewportSize, setViewport] = useState({
    viewportWidth: width,
    viewportHeight: height
  });

  function onViewportResize(
    viewportWidth: number,
    viewportHeight: number
  ): void {
    setViewport({ viewportWidth, viewportHeight });
  }

  useEffect(() => {
    addListener(onViewportResize);

    return (): void => removeListeners(onViewportResize);
  }, []);

  return viewportSize;
}
