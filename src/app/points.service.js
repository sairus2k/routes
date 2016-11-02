const PointsService = class {
  constructor() {
    this._points = [];
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

  updatePoint(index, coords, address) {
    this._points[index].coords = coords;
    this._points[index].address = address;
  }

  static createInstance() {
    return new PointsService();
  }
};

export default PointsService;
