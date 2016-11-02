import angular from 'angular';
import 'angular-mocks';
import appComponent from './app.component';

const mockPoints = [
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
const pointsService = function () {
  this.getPoints = () => mockPoints;
  return this;
};

describe('hello component', () => {
  beforeEach(() => {
    angular.module('appMocks', []).factory('pointsService', pointsService);
    angular
      .module('app', ['app/app.html', 'appMocks'])
      .component('app', appComponent);
    angular.mock.module('app');
  });
  it('should render headings', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Routes');
  }));

  it('should get points on init', angular.mock.inject($componentController => {
    const ctrl = $componentController('app');
    ctrl.$onInit();
    expect(ctrl.points).toEqual(mockPoints);
  }));
});
