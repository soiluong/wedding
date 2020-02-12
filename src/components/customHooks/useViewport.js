import { useEffect, useState } from 'react';

import { optimizedResizeEventListener } from 'utils/dom-helpers';

let width = 0;
let height = 0;
const listeners = [];

function updateViewportSize() {
  if (typeof document !== 'undefined') {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;

    listeners.forEach(callback => callback(width, height));
  }
}

function addListener(callback) {
  listeners.push(callback);
}

function removeListeners(callback) {
  const index = listeners.indexOf(callback);

  if (index > -1) {
    listeners.splice(index, 1);
  }
}

optimizedResizeEventListener(updateViewportSize);
updateViewportSize();

export default function useViewport() {
  const [viewportSize, setViewport] = useState({
    viewportWidth: width,
    viewportHeight: height
  });

  function onViewportResize(viewportWidth, viewportHeight) {
    setViewport({ viewportWidth, viewportHeight });
  }

  useEffect(() => {
    addListener(onViewportResize);

    return () => removeListeners(onViewportResize);
  }, []);

  return viewportSize;
}
