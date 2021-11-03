const cacheName = 'cache-v1';

const resourcesToPrecache = [
  '/',
  'index.html',
  'styles/main.css',
  'images/space1.jpg',
  'images/space2.jpg',
  'images/space3.jpg',
]

self.addEventListener('install', (event) => {
  console.log('install event');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(resourcesToPrecache)))
});

self.addEventListener('activate', (event) => {
  console.log('activate event');
});

self.addEventListener('fetch', (event) => event.respondWith(caches.match(event.request).then((cachedResponse) => cachedResponse || fetch(event.request))));