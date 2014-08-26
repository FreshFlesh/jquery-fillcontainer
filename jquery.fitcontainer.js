/*
 * jquery.fillcontainer.js
 * Make a child element fill its container
 * https://github.com/FreshFlesh/jquery-fillcontainer
 *
 * Copyright (c) 2012 Thomas Charbit
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 */

;(function( $, window, document, undefined ) {
 
    $.fn.fillContainer = function( options ) {

        this.each(function() {
            var element = $( this );
            var options = $.extend( {}, options );
            var settings = {};

            // find aspectRatio
            if ( options.hasOwnProperty('aspectRatio') ) {
                settings.aspectRatio = options.aspectRatio;
            }
            else settings.aspectRatio = null;

            // find parent
            if ( options.hasOwnProperty('parent') ) {
                settings.parent = element.parents( options.parent );
            }
            else {
                settings.parent = element.parent();
            }

            // resize element to fit parent, now and then
            resizeElement();
            $(window).on( 'resize.fitcontainer', resizeElement );

            function resizeElement ( e ) {
                var elementWidth = element.width();
                var elementHeight = element.height();
                
                var parentWidth = settings.parent.width();
                var parentHeight = settings.parent.height();
                
                var ratio = 1;

                if ( element.data('fitcontainer.aspect-ratio') > 0 ) {
                      ratio = element.data('fitcontainer.aspect-ratio');
                }
                else if ( settings.aspectRatio === null ) {
                    ratio = elementWidth / elementHeight;
                }
                else {
                    ratio = settings.aspectRatio;
                }

                element.data( 'fitcontainer.aspect-ratio', ratio );
                if ( parentWidth / parentHeight > ratio ) {
                    element.css({
                        'width'       : parentWidth,
                        'height'      : Math.ceil( parentWidth / ratio ),
                        'margin-left' : 0,
                        'margin-top'  : - Math.ceil( ( parentWidth / ratio - parentHeight ) / 2 )
                    });
                }
                else {
                    element.css({
                        'height'      : parentHeight,
                        'width'       : Math.ceil( parentHeight * ratio ),
                        'margin-top'  : 0,
                        'margin-left' : - Math.ceil( ( parentHeight * ratio - parentWidth ) / 2 )
                    });
                }
            }
        });
 
        return this;

    };
 
}( jQuery, window, document, undefined ));