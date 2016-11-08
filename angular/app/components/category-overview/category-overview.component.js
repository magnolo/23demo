class CategoryOverviewController{
    constructor($state, CategoryService){
        'ngInject';

        //
        this.category;
        this.categories;
        this.$state = $state;
        this.CategoryService = CategoryService;
    }

    $onInit(){
      if(this.$state.params.name){
        this.CategoryService.get(this.$state.params.name).then((response) => {
          this.category = response.data;
          this.categories = this.category.children;
          this.indicators = this.category.indicators;
        });
      }
      else{
        this.CategoryService.all({indicators:true, tree: true}).then((response) => {
          this.categories = response.data;
        });
        this.category = {
          title: 'Categories',
          description:'choose from our list',
          image:{
            src: '/img/earth/earth-3.jpg'
          }
        }
      }
    }
}

export const CategoryOverviewComponent = {
    templateUrl: './views/app/components/category-overview/category-overview.component.html',
    controller: CategoryOverviewController,
    controllerAs: 'vm',
    bindings: {}
}
