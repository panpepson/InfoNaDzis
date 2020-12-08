const CACHE_NAME = "swdzis3";
const urlsToCache = [
"/index.css",
"/offline/index.html",
"/js/index.js",
"/js/biznes.js",
"/js/nauka.js",
"/js/plotka.js",
"/js/sport.js",
"/js/technologia.js",
"/js/zdrowie.js",
"/js/lampa.js",
"/img/logo-dwpl-32x32.png",
"/img/logo-dwpl-96x96.png",
"/img/favicon-96x96.png",
"/img/favicon-32x32.png",
"/img/favicon-16x16.png",
"/img/icon-192x192.png",
"/img/icon-256x256.png",
"/img/icon-384x384.png",
"/img/icon-512x512.png",
"/img/fb.svg",
"/img/tel.svg",                  
"/img/twi.svg"
];

self.addEventListener("install", event => {
  function onInstall() {
    event.waitUntil(
      caches.open("swdzis3").then(cache => {
        return cache.addAll(urlsToCache);
      })
    );
  }
  event.waitUntil(onInstall(event));
});

self.addEventListener("fetch", event => {
  event.respondWith(
      fetch(event.request).catch(() => {
        //return caches.match(event.request);
  return caches.match("/offline/index.html");
      })
    );
});


self.addEventListener("activate", function activator(event) {
  console.log("activate!");
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys
          .filter(function(key) {
            return key.indexOf("swdzis3") !== 0;
          })
          .map(function(key) {
            return caches.delete(key);
          })
      );
    })
  );
});

/**

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response ? response : fetch(event.request);
    })
  );
});

**/
