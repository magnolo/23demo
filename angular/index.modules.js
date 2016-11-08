angular.module('app', [
  'app.run',
	'app.filters',
	'app.services',
	'app.components',
  'app.directives',
	'app.routes',
	'app.config',
	'app.partials',
  'app.constants'
]);

angular.module('app.run', []);
angular.module('app.constants', []);
angular.module('app.routes', []);
angular.module('app.filters', []);
angular.module('app.services', []);
angular.module('app.config', []);
angular.module('app.directives', []);
angular.module('app.components', [
	'ui.router', 'ngMaterial', 'angular-loading-bar','ngAnimate',
	'restangular', 'ngStorage', 'ngSanitize','satellizer'
]);
