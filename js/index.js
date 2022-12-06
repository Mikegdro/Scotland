window.onload = function () {
    console.log("hi")
    //Mapa
    const map = L.map('map').setView([56.4906712, -4.2026458], 6);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    };

    map.on('click', onMapClick);


    var marker = L.marker([57.48759, -4.221497]).addTo(map);


    // Swiper
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
}

