'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl'
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService) {
  $log.debug('GamePadController')

  this.direction = 'north', 'south', 'east', 'west';
  this.moveDirection = this.directions[0];
  this.movePLayer = function() {
    playerService.molvePLayer(this.moveDirection)
  }
}