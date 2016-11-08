export class MapboxglVectorUtilsService {
    createVectorLayer(map, layer) {

        if (angular.isUndefined(map) || map === null) {
            throw new Error('Map is undefined');
        }

        if (angular.isUndefined(layer) || layer === null) {
            throw new Error('Layer definition is undefined');
        }
        let checkOptionalLayerAttributes = (layerObject, layerAttributes) => {
            let layerAttributesAvailables = [
                'ref',
                'source-layer',
                'minzoom',
                'maxzoom',
                'interactive',
                'filter',
                'layout',
                'paint'
            ];
            if (angular.isDefined(layerAttributes)) {
                layerAttributesAvailables.map((eachAttributeAvailable) => {
                    if (angular.isDefined(layerAttributes[eachAttributeAvailable]) && layerAttributes[eachAttributeAvailable] !== null) {
                        layerObject[eachAttributeAvailable] = layerAttributes[eachAttributeAvailable];
                    }
                });
            }
        };
        layer.id = layer.type + '_' + Date.now();

        let sourceData;

        let sourceOptions = {
            type: 'vector',
            url: layer.url
        }

        map.addSource(layer.id, sourceOptions);
        console.log(layer);
        let layerToAdd = {
            id: layer.id,
            type: layer.type || 'fill',
            source: layer.id,
            'source-layer': layer.sourceLayer,
            filter: layer.filter,
            paint: layer.paint,
            metadata: {
                type: 'mapboxgl:vectorlayer'
            }
        }
        checkOptionalLayerAttributes(layerToAdd, object.layer);
        map.addLayer(layerToAdd,'water-label');
    }
}
