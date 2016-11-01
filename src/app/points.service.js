const PointsService = class {
  constructor() {
    this._points = [
      {
        name: 'Точка марштура 1',
        coords: [
          47.916,
          -253.083
        ]
      },
      {
        name: 'Точка марштура 2',
        coords: [
          47.914,
          -253.080
        ]
      },
      {
        name: 'Точка марштура 3',
        coords: [
          47.915,
          -253.084
        ]
      }
    ];
  }

  getPoints() {
    return this._points;
  }

  removePoint(index) {
    this._points.splice(index, 1);
  }

  addPoint(name, coords) {
    this._points.push({
      name,
      coords
    });
  }

  static createInstance() {
    return new PointsService();
  }
};

export default PointsService;
