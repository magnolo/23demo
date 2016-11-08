export class CategoryService{
    constructor(API){
        'ngInject';

        //
        this.API = API;
    }
    all(params){
      return this.API.one('categories').get(params || '');
    }
    get(id){
      return this.API.one('categories', id).get();
    }
    getWithIndicators(id){
      return this.API.one('categories', id).one('indicators').get();
    }
}
