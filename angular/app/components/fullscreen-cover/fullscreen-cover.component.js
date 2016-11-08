class FullscreenCoverController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
    }
}

export const FullscreenCoverComponent = {
    templateUrl: './views/app/components/fullscreen-cover/fullscreen-cover.component.html',
    controller: FullscreenCoverController,
    controllerAs: 'vm',
    bindings: {
      image: '@',
      title: '@',
      subtitle: '@',
      link:'<',
      icon: '@',
      animate: '<'
    }
}
