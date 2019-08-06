import MyMap from './map';

document
  .querySelectorAll('.map')
  .forEach(
    element =>
      new MyMap(
        element,
        'https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=5745b110-4bb1-4b0e-8202-4833743efa08'
      )
  );
