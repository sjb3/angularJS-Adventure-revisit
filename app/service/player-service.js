'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$log', '$q', 'mapService', playerService]);

function playerService($log, $q, mapService) {
    $log.debug('playerService');

    var service = {};

    var turn = 0;
    var player = service.player = {
        name: 'bnates',
        location: 'cabin',
        hp: 16
    };

    var history = service.history = [
        {
            turn,
            desc: 'Welcome to ndAdventure',
            location: player.location,
            hp: player.hp
        }
     ];

    service.movePlayer = function(direction) {
        return new $q( (resolve, reject) => {
            turn++;

            var current = player.location;
            var newLocation = mapService.mapData[current][direction]

            if (!newLocation) {
                history.unshift({
                    turn,
                    desc: 'you hit a wall!',
                    location: player.location,
                    hp: player.hp
                });
            return reject('no room in that direction');
            }

            history.unshift({
                turn,
                location: player.location,
                desc: mapService.mapData[newLocation].desc;
                hp: player.hp
            });

            player.location = newLocation;
            return resolve(player.location);
        });
    };

    return service





