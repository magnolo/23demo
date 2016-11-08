export class MapboxglEventsUtilsService {
    constructor($rootScope) {
        'ngInject';

        //
        this.$rootScope = $rootScope;

        this.eventsAvailable = [
            'webglcontextlost',
            'webglcontextrestored',
            'error',
            'render',
            'mouseout',
            'mousedown',
            'mouseup',
            'mousemove',
            'touchstart',
            'touchend',
            'touchmove',
            'touchcancel',
            'click',
            'dblclick',
            'contextmenu',
            'load',
            'movestart',
            'moveend',
            'move',
            'zoomend',
            'zoomstart',
            'zoom',
            'boxzoomend',
            'boxzoomcancel',
            'boxzoomstart',
            'rotatestart',
            'rotateend',
            'rotate',
            'dragstart',
            'drag',
            'dragend',
            'pitch'
        ];
    }
    exposeMapEvents(map){
      this.eventsAvailable.map((eachEvent) => {
        map.on(eachEvent, (event) => {
          this.$rootScope.$broadcast('mapboxglMap:' + eachEvent, event);
        })
      });
    }
}
