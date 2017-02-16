import angular from 'angular';

import ThemingSettings from './theming-settings';

export default angular.module('financier.settings', [])
    .config(ThemingSettings);