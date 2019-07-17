import ymaps from 'ymaps';

class MyMap {
  constructor(element, options) {
    ymaps
      .load(
        'https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=5745b110-4bb1-4b0e-8202-4833743efa08'
      )
      .then(maps => {
        const myMap = new maps.Map(
          element,
          {
            ...options,
            controls: []
          },
          {
            searchControlProvider: 'yandex#search'
          }
        );
        const myPlacemark = new maps.Placemark(
          myMap.getCenter(),
          {},
          {
            iconLayout: 'default#image',
            iconImageHref: 'images/baloon.png',
            iconImageSize: [60, 60],
            iconImageOffset: [-5, -38]
          }
        );
        myMap.geoObjects.add(myPlacemark);
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }
}

document.querySelectorAll('.map').forEach(element => {
  const data = $(element).data();
  new MyMap(element, { zoom: 9, ...data });
});
