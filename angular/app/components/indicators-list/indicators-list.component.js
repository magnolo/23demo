class IndicatorsListController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
    }
}

export const IndicatorsListComponent = {
    templateUrl: './views/app/components/indicators-list/indicators-list.component.html',
    controller: IndicatorsListController,
    controllerAs: 'vm',
    bindings: {
      indicators: '<'
    }
}
