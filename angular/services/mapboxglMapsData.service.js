export class MapboxglMapsDataService{
    constructor(mapboxglUtils){
        'ngInject';

        this.mapboxglUtils = mapboxglUtils;
        this._mapInstances = [];
    }
    addMap(mapId, mapInstance){
      this._mapInstances.push({
        id:mapId,
        mapInstance: mapInstance
      });
    }
    removeMapById(mapId){
      let mapIndexOf = this.mapboxglUtils.arrayObjectIndexOf(this._mapInstances, mapId, 'id');

      if(mapIndexOf !== -1){
        let mapObject = this._mapInstances[mapIndexOf];
        mapObject.mapInstance.remove();

        this._mapInstances.splice(mapIndexOf, 1);
      }
    }
    removeAllMaps(){
      this._mapInstances.map((eachMapObject) => {
        eachMapObject.mapInstance.remove();
      });

      this._mapInstances = [];
    }
    getMaps(){
      return this._mapInstances;
    }
    getMapById(mapId){
      let mapIndexOf = this.mapboxglUtils.arrayObjectIndexOf(this._mapInstances, mapId, 'id');

      if(mapIndexOf !== -1){
        return this._mapInstances[mapIndexOf].mapInstance;
      } else {
        return null;
      }
    }
}
