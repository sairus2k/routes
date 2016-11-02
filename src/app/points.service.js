const PointsService = class {
  constructor() {
    this._points = [
      {
        name: 'Точка марштура 1',
        coords: [55.7121503572884, 37.5506818671875]
      },
      {
        name: 'Точка марштура 2',
        coords: [55.72316883469081, 37.54727840423583]
      },
      {
        name: 'Точка марштура 3',
        coords: [55.72316883469081, 37.5506818671875]
      }
    ];
  }

  getPoints() {
    return this._points;
  }

  removePoint(index) {
    this._points.splice(index, 1);
  }

  addPoint(name, coords, address) {
    this._points.push({
      name,
      coords,
      address
    });
  }

  static createInstance() {
    return new PointsService();
  }
};

export default PointsService;
