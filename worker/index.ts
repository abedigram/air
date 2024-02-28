"use strict";

export type Version = number;

const version: Version = 0;

declare let self: ServiceWorkerGlobalScope & { __WB_DISABLE_DEV_LOGS: boolean };

self.__WB_DISABLE_DEV_LOGS = true;

// listen to message event from window
self.addEventListener("message", (event) => {
  // HOW TO TEST THIS?
  // Run this in your browser console:
  //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected workbox object
  //     window.workbox.messageSW({command: 'log', message: 'hello world'})
  console.log(event.data);
});
