export function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    let getView = (viewName) => {
        return `./views/app/pages/${viewName}/${viewName}.page.html`;
    };

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('app', {
            abstract: true,
            data: {}, //{auth: true} would require JWT auth
            views: {
                header: {
                    templateUrl: getView('header')
                },
                footer: {
                    templateUrl: getView('footer')
                },
                main: {}
            }
        })
        .state('app.landing', {
            url: '/home',
            views: {
                'main@': {
                    templateUrl: getView('landing')
                }
            }
        })
        .state('app.landing.overview', {
            url: '/overview',
            views: {
                'overlay@': {
                    templateUrl: getView('overview')
                }
            },
            resolve: {
              categories: (CategoryService) => {
                return CategoryService.all();
              }
            },
            onEnter: () => {
							document.body.className = "no-scroll";
            },
            onExit: () => {
							document.body.className = "";
            }
        })
        .state('app.landing.overview.categorie', {
            url: '/:id/:name',
            views: {
                'overlay@': {
                    templateUrl: getView('overview')
                }
            }
        })
        .state('app.map', {
          url: '/:id',
          views : {
            'main@':{
              templateUrl: getView('map')
            }
          }
        })

    .state('app.login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: getView('login')
                }
            }
        })
        .state('app.register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        });
}
