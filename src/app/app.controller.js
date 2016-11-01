export default class {
  /** @ngInject */ constructor(pointsService) {
    this._service = pointsService;
  }
  $onInit() {
    this.points = this._service.getPoints();
    this.pointName = '';
  }
  addPoint() {
    this._service.addPoint(this.pointName);
    this.pointName = '';
  }

  removePoint(index) {
    this._service.removePoint(index);
  }
}
