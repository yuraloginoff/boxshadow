'use strict';

/* Directives */


angular.module('Boxshadow.directives', [])

.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
	  elm.text(version);
	};
	}])

.directive('selectOnClick', function () {
    return function (scope, element, attrs) {
        element.on('click', function () {
            this.select();
        });
    };
});
