import angular from 'angular';

const YandexMap = class {
  constructor($q, $log, ymapsLoader, ymapsLocation) {
    'ngInject';
    this.restrict = 'E';
    this.scope = {
      center: '=',
      zoom: '=',
      markers: '=',
      controls: '='
    };
    this._q = $q;
    this._log = $log.log;
    this._ymapsLoader = ymapsLoader;
    this._ymapsLocation = ymapsLocation;
  }

  link(scope, element) {
    const updateCollection = () => {
      const line = [];
      this.collection.removeAll();
      scope.markers.forEach(item => {
        this.collection.add(new this._ymaps.Placemark(item.coords, {
          balloonContentHeader: item.name,
          balloonContentBody: item.address
        }));
        line.push(item.coords);
      });
      this.collection.add(new this._ymaps.Polyline(line));
    };

    this._ymapsLoader.ready()
      .then(ymaps => {
        this._log('Yandex Map initialized');
        this._log('Instance of Yandex API: ', ymaps);
        this._ymaps = ymaps;
        this.map = new this._ymaps.Map(element[0], {
          center: scope.center || [0, 0],
          zoom: scope.zoom || 0,
          behaviors: ['default']
        });
        this.collection = new this._ymaps.GeoObjectCollection();
        updateCollection();
        this.map.geoObjects.add(this.collection);
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
        this.map.setCenter(newVal);
      }
    });

    scope.$watch('markers', () => {
      this._log('Markers object was changed.');
      if (angular.isDefined(this._ymaps)) {
        updateCollection();
      }
    }, true);

    scope.controls.getPosition = () => {
      if (angular.isUndefined(this.map)) {
        return [0, 0];
      }
      return this.map.getCenter();
    };

    scope.controls.geocode = coords => {
      if (angular.isDefined(this._ymaps)) {
        const deferred = this._q.defer();
        this._ymaps.geocode(coords).then(result => {
          return deferred.resolve(result.geoObjects.get(0).properties.get('name'));
        });
        return deferred.promise;
      }
    };
  }

  static createInstance($q, $log, ymapsLoader, ymapsLocation) {
    'ngInject';
    YandexMap.instance = new YandexMap($q, $log, ymapsLoader, ymapsLocation);
    return YandexMap.instance;
  }
};

export default YandexMap;
