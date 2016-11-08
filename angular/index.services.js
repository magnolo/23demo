import {MapboxglUtilsService} from './services/mapboxglUtils.service';
import {MapboxglMapsDataService} from './services/mapboxglMapsData.service';
import {MapboxglEventsUtilsService} from './services/mapboxglEventsUtils.service';
import {MapboxglVectorUtilsService} from './services/mapboxglVectorUtils.service';
import {IndicatorService} from './services/indicator.service';
import {MapboxglService} from './services/mapboxgl.service';
import {IconService} from './services/icon.service';
import {CategoryService} from './services/category.service';
import {APIService} from './services/API.service';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

angular.module('app.services')
	.service('MapboxglUtilsService', MapboxglUtilsService)
	.service('MapboxglMapsDataService', MapboxglMapsDataService)
	.service('MapboxglEventsUtilsService', MapboxglEventsUtilsService)
	.service('MapboxglVectorUtilsService', MapboxglVectorUtilsService)
	.service('IndicatorService', IndicatorService)
	.service('MapboxglService', MapboxglService)
	.service('IconService', IconService)
	.service('CategoryService', CategoryService)
	.service('API', APIService)
	.service('DialogService', DialogService)
	.service('ToastService', ToastService)
