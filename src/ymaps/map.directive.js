const YandexMap = class {
  constructor($log, ymapsLoader) {
    'ngInject';
    this.restrict = 'E';
    this.scope = {
      center: '=',
      zoom: '='
    };
    this._log = $log.log;
    this._ymapsLoader = ymapsLoader;
  }

  link(scope, element) {
    this._ymapsLoader.ready().then(ymaps => {
      this._log('Yandex Map initialized');
      this._log(element);
      const self = YandexMap.instance;
      self.map = new ymaps.Map(element[0], {
        center: scope.center || [0, 0],
        zoom: scope.zoom || 0,
        behaviors: ['default']
      });
    });
  }

  static createInstance($log, ymapsLoader) {
    YandexMap.instance = new YandexMap($log, ymapsLoader);
    return YandexMap.instance;
  }
};

export default YandexMap;
