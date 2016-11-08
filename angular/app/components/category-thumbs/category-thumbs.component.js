class CategoryThumbsController{
    constructor(CategoryService){
        'ngInject';


    }

    $onInit(){

    }
}

export const CategoryThumbsComponent = {
    templateUrl: './views/app/components/category-thumbs/category-thumbs.component.html',
    controller: CategoryThumbsController,
    controllerAs: 'vm',
    require:{
      overviewCtrl: '^categoryOverview'
    },
    bindings: {
      categories: '<'
    }
}
