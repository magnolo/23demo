export function RandomBackgroundDirective(){
    return {
        restrict:'AC',
        link: function(scope, element, attrs, controllers){

            let color =  attrs.randomBackground;
            if(!color){
              //generate random color
             color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            }


           //Add random background class to selected element
           element.css('background-color', color);
        }
    }
}
