const getUrl = config => {
  let url = '';
  for (const key in config.params) {
    if (!config.params.hasOwnProperty(key)) {
      continue;
    }
    if (url !== '') {
      url += '&';
    }
    url += `${key}=${encodeURIComponent(config.params[key])}`;
  }
  return `${config.baseUrl}?${url}`;
};

const YandexLoader = class {
  constructor($q, $window, $document, $log, ymapsConfig) {
    this._q = $q;
    this._log = $log;
    this._window = $window;
    this._document = $document[0];
    this._config = ymapsConfig;
  }

  ready() {
    const deferred = this._q.defer();
    this._window.ymapsReady = ymaps => deferred.resolve(ymaps);
    this._window.ymapsError = error => deferred.reject(error);
    const script = this._document.createElement('script');
    script.src = getUrl(this._config);
    this._document.body.appendChild(script);
    return deferred.promise;
  }

  static createInstance($q, $window, $document, $log, ymapsConfig) {
    'ngInject';
    return new YandexLoader($q, $window, $document, $log, ymapsConfig);
  }
};

export default YandexLoader;
