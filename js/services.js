'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('Boxshadow.services', [])

.value('version', '0.1')

/*!
* Conversion based on HEX <=> RGB Conversion by Daniel Lamb
* https://github.com/daniellmb/HEX-RGB-Conversion
*/
.factory('ColorConvert', function(){
	return {
		/**
		 * [toRGB color conversion]
		 * @param  {[string]} #ff0000 
		 * @return {[object]}       [description]
		 */
		toRGB: function (color) {
			//convert string to base 16 number, remove '#'
			var num = parseInt(color.substring(1), 16);
			//return the red, green and blue values as an object
			return {
				r: num >> 16, 
				g: num >> 8 & 255, 
				b: num & 255
			};
		},

		/**
		 * [toHex color conversion]
		 * @param  {[int]} red   [description]
		 * @param  {[int]} green [description]
		 * @param  {[int]} blue  [description]
		 * @return {[string]}       [hex string]
		 */
		toHex: function (red, green, blue) {			
	        return ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1);
		}
	};
})
;
