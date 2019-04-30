import ymaps from 'ymaps';

import '../../static/images/baloon.png';

export default function updateMap(id, opt = { center: [55.751574, 37.573856], zoom: 9 }) {
  ymaps.load('https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=5745b110-4bb1-4b0e-8202-4833743efa08').then((ymaps) => {
    const myMap = new ymaps.Map(id, {
      center: opt.center,
      zoom: opt.zoom,
      controls: [],
    }, {
      searchControlProvider: 'yandex#search',
    });
    const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/baloon.png',
      iconImageSize: [60, 60],
      iconImageOffset: [-5, -38],
    });
    myMap.geoObjects.add(myPlacemark);
  })
    .catch(error => console.log('Failed to load Yandex Maps', error));
}
