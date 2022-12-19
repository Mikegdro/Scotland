const map = L.map('footerMap', {
    dragging: false,
    scrollWheelZoom: false,
}).setView([56.4906712, -4.2026458], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);