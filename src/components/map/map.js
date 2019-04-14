
module.exports = function() {
    var myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://m-ch.ml/t/src/1555262081604.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-5, -38]
    });
    myMap.geoObjects.add(myPlacemark);
}
