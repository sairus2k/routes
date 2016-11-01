import angular from 'angular';
import ymaps from './ymaps';

import appComponent from './app/app.component';
import PointsService from './app/points.service';

import './index.scss';

export const app = 'app';

angular
  .module(app, [
    ymaps
  ])
  .factory('pointsService', PointsService.createInstance)
  .component('app', appComponent);
