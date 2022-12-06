window.onload = function () {
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

    var arrayMarkers = [];

    var inverness = L.marker([57.48759, -4.221497]).addTo(map);
    inverness.class = ".inverness";
    inverness.on('click', showDescription);

    var perth = L.marker([56.393474, -3.434833]).addTo(map);
    perth.class = ".perth";
    perth.on('click', showDescription);

    arrayMarkers.push(inverness);
    arrayMarkers.push(perth)

    function showDescription(event) {
        //Sacamos el objeto en el que se ha pinchado
        let obj = document.querySelector(event.target.class);

        //Comprobamos si hay otro marker activo en el mapa y lo desactivamos
        let anterior = arrayMarkers.find(obj => obj.class != event.target.class && document.querySelector(obj.class).classList.contains('active'));

        console.log(anterior)

        if(anterior != null) {
            let anteriorElement = document.querySelector(anterior.class);
            anteriorElement.classList.toggle('active');
            anteriorElement.style.maxHeight = null;
            // anteriorElement.style.display = 'none';
        } 
        
        //Activamos/desactivamos en el que se ha pinchado
        obj.classList.toggle('active');

        //Aplicamos los estilos
        if(obj.classList.contains('active')){
            // obj.style.display = 'block';
            obj.style.maxHeight = obj.scrollHeight + 'px';
        }else {
            // obj.style.display = 'none';
            obj.style.maxHeight = '0px';
        }
        
    }


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

document.addEventListener("click", event => {
    if(event.target.classList.contains('boton')){
        let anchor = Array.from(event.target.childNodes);
        window.location = anchor[1].getAttribute("href");
    }
})

