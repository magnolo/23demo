export class IndicatorService{
    constructor(API){
        'ngInject';

        //
        this.API = API;
    }
    get(id){
      return this.API.one('indicators', id).get();
    }
    getData(id){
      return this.API.one('indicators', id).all('data').get('');
    }
    getDataByCountry(id, iso){
        return this.API.one('indicators', id).all('data').one('country', iso).get('');
    }
}
