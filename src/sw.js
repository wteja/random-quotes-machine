var cacheName = 'random-quotes-generator';
var files = [
    '/',
    '/index.html',
    '/assets/css/style.css',
    '/assets/js/script.js',
    '/assets/lib/bootstrap/bootstrap.min.css',
    '/assets/img/icons/favicon.ico'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(files))
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request, { ignoreSearch: true })
            .then(response => {
                return response || fetch(e.request);
            })
    )
});