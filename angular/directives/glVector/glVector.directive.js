export function GlVectorDirective(MapboxglVectorUtilsService) {
    return {
        restrict: 'A',
        replace: false,
        require: '?^mapboxgl',
        link: function(scope, element, attrs, controller) {
            //

            if (!controller) {
                throw new Error('Invalid mapboxgl-directive controller');
            }
            var mapboxglScope = controller.getMapboxGlScope();

            var disableVectorEvents = (map) => {
                map.off('click');
                map.off('mousemove');
            };

            var enableVectorEvents = (map) => {
                map.on('click', (event) => {
                    var style = map.getStyle();
                    var allLayers = style.layers.filter((eachLayer) => {
                        if (angular.isDefined(eachLayer.metadata) && angular.isDefined(eachLayer.metadata.type)) {
                            return eachLayer.metadata.type === 'mapboxgl:vectorlayer' && angular.isDefined(eachLayer.metadata.popup) && angular.isDefined(eachLayer.metadata.popup.enabled) && eachLayer.metadata.popup.enabled;
                        }
                    }).map((eachLayer) => {
                        return eachLayer.id;
                    });

                    var features = map.queryRenderedFeatures(event.point, {
                        layers: allLayers
                    });

                    if (features.length > 0) {
                        var feature = features[0];

                        var popupOptions = feature.layer.metadata.popup.options;
                        var popupMessage = feature.layer.metadata.popup.message;

                        var popup = new mapboxgl.Popup(popupOptions)
                            .setLngLat(map.unproject(event.point))
                            .setHTML(popupMessage)
                            .addTo(map);
                    }
                });

                map.on('mousemove', (event) => {
                    var style = map.getStyle();
                    var allLayers = style.layers.filter((eachLayer) => {
                        if (angular.isDefined(eachLayer.metadata) && angular.isDefined(eachLayer.metadata.type)) {
                            return eachLayer.metadata.type === 'mapboxgl:vectorlayer';
                        }
                    }).map((eachLayer) => {
                        return eachLayer.id;
                    });

                    var features = map.queryRenderedFeatures(event.point, {
                        layers: allLayers
                    });
                    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
                });
            };
            let geojsonWatched = (map, controller, vector) => {
                if (angular.isDefined(vector)) {
                    disableVectorEvents(map);
                    MapboxglVectorUtilsService.createVectorLayer(map, vector);
                    // if (Object.prototype.toString.call(vector) === Object.prototype.toString.call({})) {
                    //
                    //     //controller.addGeojsonObject(vector);
                    // } else if (Object.prototype.toString.call(vector) === Object.prototype.toString.call([])) {
                    //     vector.map((eachVectorLayer) => {
                    //         MapboxglVectorUtilsService.createVectorLayer(map, eachVectorLayer);
                    //         //controller.addGeojsonObject(eachVectorLayer);
                    //     });
                    // } else {
                    //     throw new Error('Invalid geojson parameter');
                    // }

                    enableVectorEvents(map);
                }
            };
            controller.getMap().then((map) => {



                    if (map.style.loaded()) {
                          geojsonWatched(map, controller, controller.glVector);
                    } else {
                        map.style.on('load', () => {
                          console.log('in');
                              geojsonWatched(map, controller, controller.glVector);
                        });
                    }

            });

        }
    }
}
GlVectorDirective.$inject = ['MapboxglVectorUtilsService'];
