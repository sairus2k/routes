import angular from 'angular';
import config from './config';
import loaderService from './loader.service';
import location from './location.service';
import mapDirective from './map.directive';
import './style.scss';

const appModule = angular.module('ymap', [])
  .constant('ymapsConfig', config)
  .factory('ymapsLoader', loaderService.createInstance)
  .factory('ymapsLocation', location.createInstance)
  .directive('yandexMap', mapDirective.createInstance)
  .name;

export default appModule;
