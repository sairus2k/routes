const PointsService = class {
  constructor() {
    this._points = [
      {
        name: 'Точка марштура 1'
      },
      {
        name: 'Точка марштура 2'
      },
      {
        name: 'Точка марштура 3'
      }
    ];
  }

  getPoints() {
    return this._points;
  }

  removePoint(index) {
    this._points.splice(index, 1);
  }

  addPoint(name) {
    this._points.push({name});
  }

  static createInstance() {
    return new PointsService();
  }
};

export default PointsService;
