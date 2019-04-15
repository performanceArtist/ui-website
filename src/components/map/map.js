const ymaps = require('ymaps').default;

module.exports = function updateMap(id) {
    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=5745b110-4bb1-4b0e-8202-4833743efa08').then(ymaps => {
        var myMap = new ymaps.Map(id, {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: 'https://m-ch.ml/t/src/1555262081604.png',
            iconImageSize: [60, 60],
            iconImageOffset: [-5, -38]
        });
        myMap.geoObjects.add(myPlacemark);
    })
    .catch(error => console.log('Failed to load Yandex Maps', error));
}
