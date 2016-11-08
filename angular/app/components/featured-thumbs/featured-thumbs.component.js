class FeaturedThumbsController{
    constructor(){
        'ngInject';

        //
        this.thumbs = [{
          id:1,
          title:'Atlas of ODG',
          date_created: '2016-06-07 12:40:43',
          location:{
            title:'Vienna'
          },
          image:{
            src: '/img/earth/earth-3.jpg'
          },
          user:{
            firstname: 'Manfred',
            lastname: 'Walder',
            fullName: 'Manfred Walder',
            image:{
              src:'/img/earth/earth-6.jpg'
            }
          }
        },{
          id:2,
          title:'Atlas of ODG',
          date_created: '2016-06-07 12:40:43',
          location:{
            title:'Vienna'
          },
          image:{
            src: '/img/earth/earth-2.jpg'
          },
          user:{
            firstname: 'Manfred',
            lastname: 'Walder',
            fullName: 'Manfred Walder',
            image:{
              src:'/img/earth/earth-5.jpg'
            }
          }
        }]
    }

    $onInit(){
    }
}

export const FeaturedThumbsComponent = {
    templateUrl: './views/app/components/featured-thumbs/featured-thumbs.component.html',
    controller: FeaturedThumbsController,
    controllerAs: 'vm',
    bindings: {}
}
