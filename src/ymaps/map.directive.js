import angular from 'angular';

const YandexMap = class {
  constructor($log, ymapsLoader, ymapsLocation) {
    'ngInject';
    this.restrict = 'E';
    this.scope = {
      center: '=',
      zoom: '='
    };
    this._log = $log.log;
    this._ymapsLoader = ymapsLoader;
    this._ymapsLocation = ymapsLocation;
  }

  link(scope, element) {
    this._ymapsLoader.ready()
      .then(ymaps => {
        this._log('Yandex Map initialized');
        this._log('Instance of Yandex API: ', ymaps);
        this.map = new ymaps.Map(element[0], {
          center: scope.center || [0, 0],
          zoom: scope.zoom || 0,
          behaviors: ['default']
        });
        this._log('Map object: ', this.map);
      })
      .catch(error => {
        this._log(error);
      });

    this._ymapsLocation.get()
      .then(position => {
        this._log('User position object: ', position);
        scope.center = [
          position.coords.latitude,
          position.coords.longitude
        ];
      })
      .catch(error => {
        this._log(error);
      });

    scope.$watch('center', newVal => {
      this._log('Position changed to ', newVal);
      if (angular.isDefined(this.map)) {
        this.map.panTo(newVal);
      }
    });
  }

  static createInstance($log, ymapsLoader, ymapsLocation) {
    YandexMap.instance = new YandexMap($log, ymapsLoader, ymapsLocation);
    return YandexMap.instance;
  }
};

export default YandexMap;
