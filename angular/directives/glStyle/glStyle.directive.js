export function GlStyleDirective() {
    return {
        restrict: 'A',
        scope:false,
        replace:false,
        require: '?^mapboxgl',
        link: function(scope, element, attrs, controller) {
            //
            if (!controller) {
                throw new Error('Invalid mapboxgl-directive controller');
            }
            /*
      mapbox://styles/mapbox/streets-v9
      mapbox://styles/mapbox/outdoors-v9
      mapbox://styles/mapbox/light-v9
      mapbox://styles/mapbox/dark-v9
      mapbox://styles/mapbox/satellite-v9
			mapbox://styles/mapbox/satellite-streets-v9
    */

		var mapboxglScope = controller.getMapboxGlScope();

		controller.getMap().then(function (map) {
			mapboxglScope.$watch('glStyle', function (style, oldStyle) {
				if (angular.isDefined(style) && style !== null) {
					map.setStyle(style);

					map.on('style.load', function () {
						$rootScope.$broadcast('mapboxglMap:styleChanged', {
							map: map,
							newStyle: style,
							oldStyle: oldStyle
						});
					});
				}
			}, true);
		});
        }
    }
}
