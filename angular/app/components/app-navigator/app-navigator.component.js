class AppNavigatorController{
    constructor($state){
        'ngInject';

        //
        this.goto = 'app.landing.overview';
        this.$state = $state;

    }

    $onInit(){
    }

}

export const AppNavigatorComponent = {
    templateUrl: './views/app/components/app-navigator/app-navigator.component.html',
    controller: AppNavigatorController,
    controllerAs: 'vm',
    bindings: {}
}
