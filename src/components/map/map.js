import ymaps from 'ymaps';

class MyMap {
  constructor(root, url, options = { zoom: 9 }) {
    this.root = root;
    this.url = url;
    this.options = options;

    this.init = this.init.bind(this);
    this.createMap = this.createMap.bind(this);
    this.addPlacemark = this.addPlacemark.bind(this);

    this.init();
  }

  init() {
    this.data = $(this.root).data();

    ymaps
      .load(this.url)
      .then(maps => {
        this.ymaps = maps;

        this.createMap();
        this.addPlacemark();
      })
      .catch(error => {
        console.log('Failed to load Yandex Maps', error);
      });
  }

  createMap() {
    this.map = new this.ymaps.Map(
      this.root,
      {
        ...this.data,
        ...this.options,
        controls: []
      },
      {
        searchControlProvider: 'yandex#search'
      }
    );
  }

  addPlacemark() {
    const myPlacemark = new this.ymaps.Placemark(
      this.map.getCenter(),
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'images/baloon.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-5, -38]
      }
    );
    this.map.geoObjects.add(myPlacemark);
  }
}

document
  .querySelectorAll('.map')
  .forEach(
    element =>
      new MyMap(
        element,
        'https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=5745b110-4bb1-4b0e-8202-4833743efa08'
      )
  );
