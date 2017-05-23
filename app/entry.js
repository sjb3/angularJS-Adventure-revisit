'use strict';

require('/scss/main.scss');
//require('/scss/main.scss');

const angular = require('angular');

angular.module('ngAdventure', []);

require('./service/map-service.js');
require('./service/player-service.js');
