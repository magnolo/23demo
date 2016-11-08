class MapViewController{
    constructor(IndicatorService){
        'ngInject';

        //
        this.indicator;
        this.countryData = null;
        this.IndicatorService = IndicatorService;
        this.admin0Layer = {
          'url': 'mapbox://magnolo.6zzfq94v',
          source: 'admin0',
          'source-layer': 'ne_10m_admin_0_countries-5pek43',
          filter: ['!=', 'ISO_A2', ''],
          paint: {
              'fill-color': '#000',
              'fill-opacity': 1
          }
        };
    }

    $onInit(){
    }

}

export const MapViewComponent = {
    templateUrl: './views/app/components/map-view/map-view.component.html',
    controller: MapViewController,
    controllerAs: 'vm',
    bindings: {}
}
