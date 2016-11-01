import 'jquery-ui/ui/widgets/sortable';
import angular from 'angular';
import 'angular-ui-sortable';
import ymaps from './ymaps';

import appComponent from './app/app.component';
import PointsService from './app/points.service';

import './index.scss';

export const app = 'app';

angular
  .module(app, [
    'ui.sortable',
    ymaps
  ])
  .factory('pointsService', PointsService.createInstance)
  .component('app', appComponent);
