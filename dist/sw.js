const staticCashName = 's-app-v1';

const assetUrl = [
  './index.html',
  './bundle.js',
  '../src/app.tsx',
  '../src/index.tsx'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCashName).then(cache => cache.addAll([assetUrl]))
  )
});

self.addEventListener('activate', () => {

})