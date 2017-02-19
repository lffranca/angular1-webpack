'use strict';

ThemingSettings.$inject = [
    '$mdThemingProvider'
];

export default function ThemingSettings(
    $mdThemingProvider
) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('amber');
}