const CACHE_NAME = 'sw-dzis-1';
const urlsToCache = [
	'/',
	'/img/logo-dwpl-32x32.png',
	'/img/logo-dwpl-96x96.png'
];
self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
		return cache.addAll(urlsToCache);
	}));
});

self.addEventListener('fetch', (event) => {
	event.respondWith(caches.match(event.request).then((response) => {
		return response ? response : fetch(event.request);
	}));
});
