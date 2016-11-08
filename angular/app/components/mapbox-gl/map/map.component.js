class MapController{
    constructor($scope, $state, $timeout,IndicatorService, MapboxglService){
        'ngInject';

        //
        this.MapboxglService = MapboxglService;
        this.IndicatorService = IndicatorService;
        this.$state = $state;
        this.$timeout = $timeout;
        this.$scope = $scope;
    }

    $onInit(){
      this.IndicatorService.get(this.$state.params.id).then((indicator) => {
        this.mapView.indicator = indicator.data;
        this.IndicatorService.getData(this.$state.params.id).then((data) => {
            this.MapboxglService.initMap('map', indicator.data, data.data);
            this.$scope.$on('mapClicked', (e, d) => {
              this.IndicatorService.getDataByCountry(this.$state.params.id, d.iso).then((response) => {
                this.mapView.doIt(response);
              });
            });
        });
      });
    }
}

export const MapComponent = {
    template: '<div id="map"></div>',
    controller: MapController,
    controllerAs: 'vm',
    require:{
      mapView: '^'
    },
    bindings: {
      indicator: '<'
    }
}
