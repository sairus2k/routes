const Geolocation = class {
  constructor($q) {
    this._q = $q;
  }
  get() {
    const deferred = this._q.defer();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject);
    } else {
      deferred.reject(new Error('The browser does not support Geolocation'));
    }
    return deferred.promise;
  }

  static createInstance($q) {
    return new Geolocation($q);
  }
};

export default Geolocation;
