const CACHE_NAME = 'sw';
const urlsToCache = [
	'index.html',
	'index.js,',
	'index.css',
	'manifest.json'
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