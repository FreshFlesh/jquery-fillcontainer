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
        var defaults = {
            aspectRatio : null,
            parent : '',
            continuous : true,
            offset : [ 0, 0 ]
        };

        options = $.extend( defaults, options );

        this.each(function() {
            var element = $( this );
            var elementWidth = element.width();
            var elementHeight = element.height();
            var parentElement = options.parent ? element.parents( options.parent ) : element.parent();

            if ( element.data('aspect-ratio') > 0 ) {
                options.aspectRatio = element.data('aspect-ratio');
            }
            else if ( options.aspectRatio === null ) {
                options.aspectRatio = element.width() / element.height();
            }

            // resize element to fit parent, now and then
            resizeElement();

            if ( options.continuous === true ) {
                $(window).on( 'resize.fillcontainer', resizeElement );
            }
            

            function resizeElement ( ) {
                var parentWidth = parentElement.width();
                var parentHeight = parentElement.height();

                if ( parentWidth / parentHeight > options.aspectRatio ) {
                    element.css({
                        'width'       : parentWidth,
                        'height'      : Math.ceil( parentWidth / options.aspectRatio ),
                        'margin-left' : 0 + options.offset[0],
                        'margin-top'  : - Math.ceil( ( parentWidth / options.aspectRatio - parentHeight ) / 2 ) + options.offset[1]
                    });
                }
                else {
                    element.css({
                        'height'      : parentHeight,
                        'width'       : Math.ceil( parentHeight * options.aspectRatio ),
                        'margin-top'  : 0 + options.offset[1],
                        'margin-left' : - Math.ceil( ( parentHeight * options.aspectRatio - parentWidth ) / 2 ) + options.offset[0]
                    });
                }
            }
        });
 
        return this;

    };
 
}( jQuery, window, document, undefined ));