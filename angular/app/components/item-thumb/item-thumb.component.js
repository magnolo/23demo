class ItemThumbController{
    constructor(IconService){
        'ngInject';

        //
        this.IconService = IconService;
    }

    $onInit(){
    }
}

export const ItemThumbComponent = {
    templateUrl: './views/app/components/item-thumb/item-thumb.component.html',
    controller: ItemThumbController,
    controllerAs: 'vm',
    bindings: {
      item:'<',
      type:'@'
    }
}
