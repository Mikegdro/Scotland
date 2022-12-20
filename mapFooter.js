const map = L.map('footerMap', {
    // dragging: false,
    scrollWheelZoom: false,
}).setView([56.4906712, -4.2026458], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var inverness = L.marker([57.48759, -4.221497]).addTo(map);
inverness.class = ".inverness";
inverness.on('click', () => {
    window.location.assign('https://www.visitscotland.com/info/services/inverness-icentre-p333031');
})

var perth = L.marker([56.393474, -3.434833]).addTo(map);
perth.class = ".perth";
perth.on('click', () => {
    window.location.assign("https://www.visitscotland.com/info/services/perth-icentre-p234431");
})

var aberdeen = L.marker([57.15, -2.1]).addTo(map);
aberdeen.class = ".aberdeen";
aberdeen.on('click', () => {
    window.location.assign("https://www.visitscotland.com/info/services/aberdeen-icentre-p332241");
})

var edimburgh = L.marker([55.953333, -3.189167]).addTo(map);
edimburgh.class = ".edimburgh";
edimburgh.on('click', () => {
    window.location.assign("https://www.visitscotland.com/info/services/edinburgh-icentre-p234441");
})