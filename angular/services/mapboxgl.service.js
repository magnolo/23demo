import {
    scaleLinear
} from "d3-scale";
import * as d3array from "d3-array";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

export class MapboxglService {
    constructor($timeout, $rootScope) {
        'ngInject';

        //
        this.$timeout = $timeout;
        this.mapboxgl = mapboxgl;
        this.map, this.admin0;
        this.canvas;
        this.palette;
        this.ctx;
        this.scaleLinear = scaleLinear;
        this.d3array = d3array;
        this.clickFn;
        this.$rootScope = $rootScope;
    }
    initMap(id, item, data) {
            this.mapboxgl.accessToken = "pk.eyJ1IjoibWFnbm9sbyIsImEiOiJuSFdUYkg4In0.5HOykKk0pNP1N3isfPQGTQ"
            this.map = new mapboxgl.Map({
                container: id || 'map',
                style: 'mapbox://styles/mapbox/light-v9',
                minZoom: 2,
                center: [16.372778, 48.209206]
            });
            this.map.on('load', () => {
                this.createCanvas(item.style.base_color);
                this.map.addSource('admin0', {
                    type: 'vector',
                    'url': 'mapbox://magnolo.6zzfq94v'
                });
                this.admin0 = this.map.addLayer({
                        id: 'admin0shaped',
                        source: 'admin0',
                        'source-layer': 'ne_10m_admin_0_countries-5pek43',
                        type: 'fill',
                        filter: ['!=', 'ISO_A2', ''],
                        paint: {
                            'fill-color': '#000',
                            'fill-opacity': 1
                        }
                    }, 'water-label')
                    .addLayer({
                        "id": "country-hover",
                        "type": "line",
                        "source": "admin0",
                        "layout": {},
                        'source-layer': "ne_10m_admin_0_countries-5pek43",
                        "paint": {
                            "line-color": '#333',
                            "line-width": 2,

                        },
                        "filter": ["==", "ISO_A2", ""]
                    }, 'water-label');

                this.map.on("mousemove", (e) => {
                        this.$timeout(() => {
                            let features = this.map.queryRenderedFeatures(e.point, {
                                layers: ['admin0shaped']
                            });
                            if (features.length) {
                                this.map.setFilter("country-hover", ["==", "ISO_A2", features[0].properties.ISO_A2]);
                            } else {
                                this.map.setFilter("country-hover", ["==", "ISO_A2", ""]);
                            }
                        })


                    })
                    .on('click', (e) => {
                        let features = this.map.queryRenderedFeatures(e.point, {
                            layers: ['admin0shaped']
                        });
                        if (features.length) {
                            this.$rootScope.$broadcast('mapClicked', {
                              iso: features[0].properties.ISO_A2
                            });
                        }
                    })
                    .on('mousemove', (e) => {
                        let features = this.map.queryRenderedFeatures(e.point, {
                            layers: ['admin0shaped']
                        });
                        this.map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
                    });
                this.map.setPaintProperty('admin0shaped', 'fill-color', this.getDataColors(data))
            })

        }
        //
    getDataColors(data) {
        let colors = {
            'property': 'ISO_A2',
            'type': 'categorical',
            'stops': []
        };
        let field = 'score';
        let min = this.d3array.min(data, (d) => {
            return d[field];
        });
        let max = this.d3array.max(data, (d) => {
            return d[field];
        });
        let linearScale = this.scaleLinear().domain([min, max]).range([0, 256]);
        angular.forEach(data, (country) => {
            let colorPos = parseInt(linearScale(parseFloat(country[field]))) * 4; //;
            let color = 'rgba(' + this.palette[colorPos] + ', ' + this.palette[colorPos + 1] + ', ' + this.palette[colorPos + 2] + ', ' + parseFloat(this.palette[colorPos + 3] / 255).toFixed(2) + ')';
            let paint = [country.iso, color];
            colors.stops.push(paint);
        });
        return colors;
    }
    createCanvas(color) {
        if (!angular.isDefined(this.canvas)) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = 280;
            this.canvas.height = 10;
            this.ctx = this.canvas.getContext('2d');
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        var gradient = this.ctx.createLinearGradient(0, 0, 280, 10);

        gradient.addColorStop(1, 'rgba(255,255,255,0.6)');
        gradient.addColorStop(0.53, color || 'rgba(128, 243, 198,0.6)');
        gradient.addColorStop(0, 'rgba(102,102,102,0.6)');

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 280, 10);
        this.palette = this.ctx.getImageData(0, 0, 257, 1).data;

    }

}
