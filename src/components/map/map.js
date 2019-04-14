

/*
ymaps.ready(function() {

    var myMap = new ymaps.Map('map', {
        center: [55.8, 37.6],
        zoom: 10
    });

    console.log(ymaps, window.ymaps.Placemark);

    var myPlacemark = new ymaps.Placemark([55.7339375178253,37.58821507608095], {
        balloonContent: '<strong>Yandex office in Moscow</strong><br/>Address: 119021, Moscow, Lva Tolstogo Street, 16',
        iconCaption: 'Yandex'
    }, {
       preset: 'islands#redDotIconWithCaption'
    });
    myMap.geoObjects.add(myPlacemark);

});


ymaps.ready(init);

function init() {
   var myMap = new ymaps.Map('map', {
            center: [55.74, 37.588215],
            zoom: 15,
            controls: ['zoomControl', 'geolocationControl', 'typeSelector', 'trafficControl','routeEditor']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([55.7339375178253,37.58821507608095], {
            balloonContent: '<strong>Yandex office in Moscow</strong><br/>Address: 119021, Moscow, Lva Tolstogo Street, 16',
            iconCaption: 'Yandex'
        }, {
           preset: 'islands#redDotIconWithCaption'
        });
    myMap.geoObjects.add(myPlacemark);

}*/