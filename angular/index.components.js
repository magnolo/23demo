import {MapboxglComponent} from './app/components/mapbox-gl/mapboxgl/mapboxgl.component';
import {MapViewComponent} from './app/components/map-view/map-view.component';
import {MapComponent} from './app/components/mapbox-gl/map/map.component';
import {IndicatorsListComponent} from './app/components/indicators-list/indicators-list.component';
import {CategoryOverviewComponent} from './app/components/category-overview/category-overview.component';
import {ItemThumbComponent} from './app/components/item-thumb/item-thumb.component';
import {CategoryThumbsComponent} from './app/components/category-thumbs/category-thumbs.component';
import {FullscreenCoverComponent} from './app/components/fullscreen-cover/fullscreen-cover.component';
import {AppNavigatorComponent} from './app/components/app-navigator/app-navigator.component';
import {FeaturedThumbsComponent} from './app/components/featured-thumbs/featured-thumbs.component';
import {MapThumbComponent} from './app/components/map-thumb/map-thumb.component';
import {AppHeaderComponent} from './app/components/app-header/app-header.component';
import {AppViewComponent} from './app/components/app-view/app-view.component';
import {AppShellComponent} from './app/components/app-shell/app-shell.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';

angular.module('app.components')
	.component('mapboxgl', MapboxglComponent)
	.component('mapView', MapViewComponent)
	.component('map', MapComponent)
	.component('indicatorsList', IndicatorsListComponent)
	.component('categoryOverview', CategoryOverviewComponent)
	.component('itemThumb', ItemThumbComponent)
	.component('categoryThumbs', CategoryThumbsComponent)
	.component('fullscreenCover', FullscreenCoverComponent)
	.component('appNavigator', AppNavigatorComponent)
	.component('featuredThumbs', FeaturedThumbsComponent)
	.component('mapThumb', MapThumbComponent)
	.component('appHeader', AppHeaderComponent)
	.component('appView', AppViewComponent)
	.component('appShell', AppShellComponent)
	.component('resetPassword', ResetPasswordComponent)
	.component('forgotPassword', ForgotPasswordComponent)
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent);
