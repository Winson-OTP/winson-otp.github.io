---
layout: compress
permalink: '/unregister.js'
sitemap:
  exclude: 'yes'
---

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let reg of registrations) {
            reg.unregister();
        }
    });
}
