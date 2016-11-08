import {GlStyleDirective} from './directives/glStyle/glStyle.directive';
import {GlVectorDirective} from './directives/glVector/glVector.directive';
import {RandomBackgroundDirective} from './directives/random-background/random-background.directive';

angular.module('app.directives')
	.directive('glStyle', GlStyleDirective)
	.directive('glVector', GlVectorDirective)
	.directive('randomBackground', RandomBackgroundDirective);
