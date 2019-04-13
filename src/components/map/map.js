import ymaps from 'ymaps';

ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=5745b110-4bb1-4b0e-8202-4833743efa08&lang=en_RU&load=Map').then(maps => {
  var map = new maps.Map('map', {
    center: [-8.369326, 115.166023],
    zoom: 10
  });
  //addB(map);
}).catch(error => console.log('Failed to load Yandex Maps', error));

function addB(map) {
    BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="margin: 10px;">' +
          '<b>{{properties.name}}</b><br />' +
          '<i id="count"></i> ' +
          '<button id="counter-button"> +1 </button>' +
      '</div>', {
  
      // Переопределяем функцию build, чтобы при создании макета начинать
      // слушать событие click на кнопке-счетчике.
      build: function () {
          // Сначала вызываем метод build родительского класса.
          BalloonContentLayout.superclass.build.call(this);
          // А затем выполняем дополнительные действия.
          $('#counter-button').bind('click', this.onCounterClick);
          $('#count').html(counter);
      },
  
      // Аналогично переопределяем функцию clear, чтобы снять
      // прослушивание клика при удалении макета с карты.
      clear: function () {
          // Выполняем действия в обратном порядке - сначала снимаем слушателя,
          // а потом вызываем метод clear родительского класса.
          $('#counter-button').unbind('click', this.onCounterClick);
          BalloonContentLayout.superclass.clear.call(this);
      },
  
      onCounterClick: function () {
          $('#count').html(++counter);
          if (counter == 5) {
              alert('Вы славно потрудились.');
              counter = 0;
              $('#count').html(counter);
          }
      }
  });
  
  var placemark = new ymaps.Placemark([-8.369326, 115.166023], {
      name: 'Считаем'
  }, {
      balloonContentLayout: BalloonContentLayout,
      // Запретим замену обычного балуна на балун-панель.
      // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
      balloonPanelMaxMapArea: 0
  });
  
  map.geoObjects.add(placemark);
}


/*
ymaps.ready(init);

function init () {
    var map = new ymaps.Map('map', {
            center: [55.650625, 37.62708],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        counter = 0,

        // Создание макета содержимого балуна.
        // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="margin: 10px;">' +
                '<b>{{properties.name}}</b><br />' +
                '<i id="count"></i> ' +
                '<button id="counter-button"> +1 </button>' +
            '</div>', {

            // Переопределяем функцию build, чтобы при создании макета начинать
            // слушать событие click на кнопке-счетчике.
            build: function () {
                // Сначала вызываем метод build родительского класса.
                BalloonContentLayout.superclass.build.call(this);
                // А затем выполняем дополнительные действия.
                $('#counter-button').bind('click', this.onCounterClick);
                $('#count').html(counter);
            },

            // Аналогично переопределяем функцию clear, чтобы снять
            // прослушивание клика при удалении макета с карты.
            clear: function () {
                // Выполняем действия в обратном порядке - сначала снимаем слушателя,
                // а потом вызываем метод clear родительского класса.
                $('#counter-button').unbind('click', this.onCounterClick);
                BalloonContentLayout.superclass.clear.call(this);
            },

            onCounterClick: function () {
                $('#count').html(++counter);
                if (counter == 5) {
                    alert('Вы славно потрудились.');
                    counter = 0;
                    $('#count').html(counter);
                }
            }
        });

    var placemark = new ymaps.Placemark([55.650625, 37.62708], {
            name: 'Считаем'
        }, {
            balloonContentLayout: BalloonContentLayout,
            // Запретим замену обычного балуна на балун-панель.
            // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
            balloonPanelMaxMapArea: 0
        });

    map.geoObjects.add(placemark);
}
*/