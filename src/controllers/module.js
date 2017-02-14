import angular from 'angular';

import HomeIndexController from './home/index-controller';

export default angular.module('financier.controllers', [])
    .controller('HomeIndexController', HomeIndexController);