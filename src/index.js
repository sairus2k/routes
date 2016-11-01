import angular from 'angular';
import ymaps from './ymaps';

import {hello} from './app/hello';

import './index.scss';

export const app = 'app';

angular
  .module(app, [
    ymaps
  ])
  .component('app', hello);
