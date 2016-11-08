import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

class MapboxglController {
    constructor($scope, $element, $attrs, $q, mapboxglConstants) {
        'ngInject';

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;

        this.mapboxglConstants = mapboxglConstants;
        this.isLoading = true;

        this._mapboxGlMap = $q.defer();
        this._geojsonObjects = [];
        this._imageObjects = [];
        this._videoObjects = [];
        this._markerObjects = [];
        this._dataSources = [];
    }
    getMap() {
        return this._mapboxGlMap.promise;
    }
    getMapboxGlScope() {
        return this.$scope;
    }
    getDOMElement() {
        return this._elementDOM;
    }
    setDOMElement(elementDOM) {
        this._elementDOM = elementDOM;
    }
    getMarkerObjects() {
        return this._markerObjects;
    }
    addMarkerObject(markerObject) {
        this._markerObjects.push(markerObject);
    }
    removeMarkerObjects() {
        this._markerObjects = [];
    }
    addDataSource(source){
        this._dataSources.push(source);
    }
    removeDataSources(){
        this._dataSources = [];
    }
    /* Loading Overlay */
    changeLoadingMap(newValue) {
      if (newValue) {
        if (!this._elementDOM.hasClass('angular-mapboxgl-map-loading')) {
          this.getMap().then((map) => {
            map.getCanvas().style.opacity = 0.25;
          });

          this._elementDOM.addClass('angular-mapboxgl-map-loading');
        }
      } else {
        if (this._elementDOM.hasClass('angular-mapboxgl-map-loading')) {
          this.getMap().then((map) => {
            map.getCanvas().style.opacity = 1;
          });
          this._elementDOM.removeClass('angular-mapboxgl-map-loading');
        }
      }
    };

    $postLink() {
        if (!mapboxgl) {
            throw new Error('Mapbox GL does not included');
        }
        if (!mapboxgl.accessToken) {
            mapboxgl.accessToken = "pk.eyJ1IjoibWFnbm9sbyIsImEiOiJuSFdUYkg4In0.5HOykKk0pNP1N3isfPQGTQ";
        }
        if (!mapboxgl.supported()) {
            throw new Error('Your browser does not support Mapbox GL');
        }

        this.setDOMElement(this.$element);
        this.mapboxglMapId = this.$attrs.id ? this.$attrs.id : 'mapbox-gl-map-' + Date.now();
        this.$element.attr('id', this.mapboxglMapId);

        let updateWidth = (map) => {
            if (isNaN(this.$attrs.width)) {
                this.$element.css('width', this.$attrs.width);
            } else {
                this.$element.css('width', this.$attrs.width + 'px');
            }
            map.resize();
        };
        let updateHeight = (map) => {
            if (isNaN(this.$attrs.height)) {
                this.$element.css('height', this.$attrs.height);
            } else {
                this.$element.css('height', this.$attrs.height + 'px');
            }
            map.resize();
        };
        this.mapboxGlMap = new mapboxgl.Map({
            container: this.mapboxglMapId,
            style: this.glStyle || this.mapboxglConstants.map.defaultStyle,
            center: this.mapboxglConstants.map.defaultCenter,
            hash: angular.isDefined(this.$attrs.hash) && typeof(this.$attrs.hash) === 'boolean' ? this.$attrs.hash : this.mapboxglConstants.map.defaultHash,
            bearingSnap: angular.isDefined(this.$attrs.bearingSnap) && angular.isNumber(this.$attrs.bearingSnap) ? this.$attrs.bearingSnap : this.mapboxglConstants.map.defaultBearingSnap,
            failIfMajorPerformanceCaveat: angular.isDefined(this.$attrs.failIfMajorPerformanceCaveat) && typeof(this.$attrs.failIfMajorPerformanceCaveat) === 'boolean' ? this.$attrs.failIfMajorPerformanceCaveat : this.mapboxglConstants.map.defaultFailIfMajorPerformanceCaveat,
            preserveDrawingBuffer: angular.isDefined(this.$attrs.preserveDrawingBuffer) && typeof(this.$attrs.preserveDrawingBuffer) === 'boolean' ? this.$attrs.preserveDrawingBuffer : this.mapboxglConstants.map.defaultPreserveDrawingBuffer,
            trackResize: angular.isDefined(this.$attrs.trackResize) && typeof(this.$attrs.trackResize) === 'boolean' ? this.$attrs.trackResize : this.mapboxglConstants.map.defaultTrackResize,
            attributionControl: false
        });

        //mapboxglMapsData.addMap(this.mapboxglMapId, this.mapboxGlMap);
        // this.mapboxGlMap.on('load', (map) =>{

        this._mapboxGlMap.resolve(this.mapboxGlMap);

        this.getMap().then((map) => {
            this.isLoading = false;
            if (angular.isDefined(this.$attrs.width)) {
                updateWidth(map);
                this.$scope.$watch(() => {
                    return this.$element[0].getAttribute('width');
                }, () => {
                    updateWidth(map);
                });
            }

            // Height
            if (angular.isDefined(this.$attrs.height)) {
                updateHeight(map);
                this.$scope.$watch(() => {
                    return this.$element[0].getAttribute('height');
                }, () => {
                    updateHeight(map);
                });
            } else {
                this.$element.css('height', mapboxglConstants.map.defaultHeight);
                map.resize();
            }

        });
        // this.$scope('$destroy', () => {
        //   this.mapboxGlMap
        // });
        // })
    }
    $onInit() {}
}

export const MapboxglComponent = {
    template: '<div class="loader" ng-if="vm.isLoading"></div>',
    controller: MapboxglController,
    controllerAs: 'vm',
    bindings: {
        glStyle: '<',
        glCenter: '<',
        glMinZoom: '<',
        glMaxZoom: '<',
        glZoom: '<',
        glBearing: '<',
        glPitch: '<',
        glControls: '<',
        glFilter: '<',
        glClasses: '<',
        glGeojson: '<',
        glVector: '=',
        glInteractive: '<',
        glHandlers: '<',
        glImage: '<',
        glVideo: '<',
        glPopups: '<',
        glMarkers: '<'
    }
}
