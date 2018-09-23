'use strict';

//var app = angular.module('AngularDrumMachine', ['ngRoute']);
var app = angular.module('AngularDrumMachine', []);
var phi = (1+Math.sqrt(5))/2;

function fibword(n) {
  return Math.floor((n+1)/phi) - Math.floor(n/phi);
}

app.run(['drumMachine', '$q', '$rootScope', '$timeout', function(drumMachine, $q, $rootScope, $timeout) {
  $rootScope.loading = true;

  drumMachine.loadInstruments().then(function(result) {
    drumMachine.loadSequence().then(function(result) {
      $rootScope.machine = drumMachine;
      $rootScope.tempo = drumMachine.tempo.call(this);
      $rootScope.loading = false;
    })
  });
}]);
