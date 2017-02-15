'use strict';

// import 'angular-material/angular-material.scss';
// Stylesheets
require('angular-material/angular-material.scss');

import * as R from 'ramda';
import * as angular from 'angular';
import * as angularAnimate from 'angular-animate';
import * as angularAria from 'angular-aria';
import * as angularMessages from 'angular-messages';
import * as angularMaterial from 'angular-material';

require('./controllers/module');

angular.module('financier', [
    angularAnimate,
    angularAria,
    angularMessages,
    angularMaterial,

    'financier.controllers'
]);