'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);

function mapService($log) {
    $log.debug('mapService')

    var service = {};

    service.mapData = {
        cabin: {
            desc: 'message from the cabin',
            south: 'trail'
        },
        trail: {
            desc: 'message from the trail',
            north: 'cabin',
            east: 'gate',
            south: 'pit'
        },
        pit: {
            desc: 'stuck in a pit',
            north: 'trail'
        },
        gate: {
            desc: 'message from teh gate',
            west: 'trail',
            east: 'castle'
        },
        castle: {
            desc: 'message from the castle',
            west: 'gate',
            south: 'corridor'
        },
        corridor: {
            desc: 'message from the corridor',
            north: 'castle',
            east: 'snackroom'
        },
        snackroom: {
            desc: 'you have eaten some snacks',
            west: 'corridor',
        }
    };

    return service;
};




