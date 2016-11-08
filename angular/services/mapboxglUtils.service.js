export class MapboxglUtilsService{
    constructor($window, $q){
        'ngInject';

        //
        this.$window = $window;
        this.$q = $q;
    }
    generateMapId(){
      return 'mapbox-gl-map-' + Date.now();
    }
    validateAndFormatCenter(center){
      let defer = this.$q.defer();

      if(angular.isDefined(center)){
        if(angular.isDefined(center.autodiscover) && center.autodiscover){
          this.$window.navigator.geolocation.getCurrentPosition((position) => {
            let coordinates = position.coords;
            defer.resolve([coordinates.longitude, coordinates.latitude]);
          }, (error) => {
            defer.reject(error);
          }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge:0
          });
        } else if(angular.isNumber(center.lat) && angular.isNumber(center.lng) && (center.lng > -180 || center.lng < 180) && (center.lat > -90 || center.lat < 89)){
          defer.resolve([center.lng, center.lat]);
        } else if (angular.isArray(center) && center.length === 2 && angular.isNumber(center[0]) && angular.isNumber(center[1]) && (center[0] > -180 || center[0] < 180) && (center[1] > -90 || center[1] < 90)) {
          defer.resolve(center);
        } else {
          defer.resolve(false);
        }

      }
      return defer.promise;
    }
    arrayObjectIndexOf(array, searchTerm, property){
      for(let iterator = 0, length = array.length; iterator < length; iterator++){
        if(array[iterator][property] === searchTerm){
          return iterator;
        }
      }
      return -1;
    }
}
