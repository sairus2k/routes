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

  addPoint(name) {
    const coords = this.controls.getPosition();
    this.controls.geocode(coords).then(address => {
      this._service.addPoint(name, coords, address);
    });
    this.pointName = '';
  }

  removePoint(index) {
    this._service.removePoint(index);
  }
}
