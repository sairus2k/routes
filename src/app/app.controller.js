export default class {
  /** @ngInject */ constructor($log, pointsService) {
    this._log = $log.log;
    this._service = pointsService;
    this.controls = {};
  }

  $onInit() {
    this.points = this._service.getPoints();
    this.pointName = '';
  }

  addPoint() {
    this._service.addPoint(this.pointName, this.controls.getPosition());
    this.pointName = '';
  }

  removePoint(index) {
    this._service.removePoint(index);
  }
}
