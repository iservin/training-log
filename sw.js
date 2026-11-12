/* offline + fast start. The version below changes with every build, so a new release replaces the old cache. */
var VER = 'sg-35d7045983';
var CORE = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', function(e){ e.waitUntil(caches.open(VER).then(function(c){ return c.addAll(CORE); }).then(function(){ return self.skipWaiting(); })); });
self.addEventListener('activate', function(e){ e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){ return k!==VER; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); })); });
self.addEventListener('fetch', function(e){
  var r = e.request; if(r.method!=='GET') return;
  var u = new URL(r.url), page = r.mode==='navigate';
  if(u.origin!==location.origin && u.hostname.indexOf('fonts.g')!==0) return;
  /* the page: network first so updates arrive, cache when offline. Everything else: cache first, refresh behind. */
  if(page){ e.respondWith(fetch(r).then(function(res){ var cp=res.clone(); caches.open(VER).then(function(c){ c.put('index.html', cp); }); return res; }).catch(function(){ return caches.match('index.html'); })); return; }
  e.respondWith(caches.match(r).then(function(hit){
    var net = fetch(r).then(function(res){ if(res && (res.ok || res.type==='opaque')){ var cp=res.clone(); caches.open(VER).then(function(c){ c.put(r, cp); }); } return res; }).catch(function(){ return hit; });
    return hit || net; }));
});
