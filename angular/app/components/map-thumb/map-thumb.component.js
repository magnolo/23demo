class MapThumbController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
    }
}

export const MapThumbComponent = {
    templateUrl: './views/app/components/map-thumb/map-thumb.component.html',
    controller: MapThumbController,
    controllerAs: 'vm',
    bindings: {
      item:'<'
    }
}
