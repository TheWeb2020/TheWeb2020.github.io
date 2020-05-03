'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "27be58c24f8a1f0e5e37ae102fd883ca",
"assets/assets/earth_augmented_image.jpg": "c5c852d4c36cdcbda48802c9ca95cc27",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/menu_icon-128x128.png": "bcff0a89d5f95f49e5a8e0c373f4bd44",
"assets/LICENSE": "56d24c3ad92d57dc4c0d3f1fa6279df0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ff0a83e772d4d0d6e1f2baa8f8dacf0e",
"/": "ff0a83e772d4d0d6e1f2baa8f8dacf0e",
"main.dart.js": "3bcf7b28ad54facd02505d24436eb667",
"manifest.json": "f88926d23deeb79faa63a750d12ec7e8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
