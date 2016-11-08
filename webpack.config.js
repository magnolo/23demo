var path = require('path');
var webpack = require('webpack');

module.exports = {
	// configuration
	entry: "./angular/index.main.js",
	output: {
		filename: "app.js"
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel', // 'babel-loader' is also a legal name to reference
			query: {
				presets: ['es2015'],
				cacheDirectory: true
			}
		}]
	},
	plugin:[
		new webpack.ProvidePlugin({
			d3: 'd3',
			mapboxgl : 'mapbox-gl/dist/mapbox-gl.js'
		})
	]

};
