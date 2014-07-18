'use strict';

/* Controllers */

angular.module('Boxshadow.controllers', [])

.controller('BoxshadowController', ['$scope', 'ColorConvert', function ($scope, ColorConvert) {
  
  $scope.shadows = [];

  var Shadow = function () {
    this.hor = 0;
    this.vert = 0;
    this.blur = 0;
    this.spread = 0;
    this.colorModes = [ {label: 'hex', value: 'hex'}, {label: 'rgba', value: 'rgba'} ];
    this.colorModeSelected = { type: this.colorModes[0].value };
    this.colorHex = '#cccccc';
    this.colorRGB = {};
    this.opacity = 1;
    this.opacityVisible = false;
    this.inset = false;
  };

  $scope.output = '';

  //Add shadow
  $scope.add = function () {
    $scope.shadows.push(angular.copy( new Shadow() ));
  };
  $scope.add();

  $scope.$watch('shadows', function (newValues, oldValues, scope) {
    var outputColor, properties = [], propStr, outputProperties;

    for (var i = 0; i < newValues.length; i++) {
      //Check for color and color mode change
      if (newValues[i].colorModeSelected.type === 'hex') {
        outputColor = newValues[i].colorHex;
      } else {
        newValues[i].colorRGB = ColorConvert.toRGB(newValues[i].colorHex);
        outputColor = 'rgba(' + newValues[i].colorRGB.r +','+ newValues[i].colorRGB.g +','+ newValues[i].colorRGB.b +',' + newValues[i].opacity + ')';
      }

      //Gathering all values
      propStr = (newValues[i].hor||0)+'px ' + (newValues[i].vert||0)+'px ' + (newValues[i].blur||0)+'px ' + (newValues[i].spread||0)+'px ' + outputColor + ((newValues[i].inset) ? ' inset' : '');
      properties.push(propStr);
    };

    outputProperties = properties.join(', ');

    $scope.output = 
      '-webkit-box-shadow: ' + outputProperties + ';\n' +
      'box-shadow: ' + outputProperties + ';\n';
  }, true);

}]);