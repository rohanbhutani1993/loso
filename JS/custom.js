/*jslint browser: true*/
/*global $, jQuery, alert*/

/* Show and hide navbar */

$(document).ready(function () {
    
    'use strict';
    
    $(window).scroll(function () {
    
        
        if ($(window).scrollTop() < 80) {
            
            $('.navbar').css({
                
                'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-default').css({
                
                'background-color': 'rgba(59, 59, 59, 0)'
            
            });
            
        } else {
            
            $('.navbar').css({
                
                'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': '#444'
            
            });
            
            $('.navbar-brand img').css({
               
                'height': '35px',
                'padding-top': '0px'
                
            });
            
            $('.navbar-nav > li > a').css({
                
                'padding-top': '15px'
                
            });
            
        }
    
    });
});

/* Add smooth scrolling */

$(document).ready(function () {
    
    'use strict';
    
    $('.nav-item, #scroll-to-top').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
        
    });
    
});

/* Active menu item on click */

$(document).ready(function () {
    'use strict';
    $('.navbar-nav li a').click(function () {
        
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
        
    });
        
});

/* Highlight menu item on scroll */

$(document).ready(function () {
    'use strict';
	
    $(window).scroll(function () {
        
        $("section").each(function () {
            
            var bb = $(this).attr("id"); // will return id like About,Contact,Download
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
           
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                
                $(".navbar-nav li a[href='#" + bb + "'] ").parent().addClass("active"); // it will be like .navbar-nav li a[href='#ABOUT']
                
            } else {
                
                $(".navbar-nav li a[href='#" + bb + "'] ").parent().removeClass("active"); // it will be like .navbar-nav li a[href='#ABOUT']

            }
            
        });
        
    });
    
});

/* Add auto padding to header */

$(document).ready(function () {
    'use strict';
    
    setInterval(function () {
        
        var windowHeight = $(window).height();
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'

            
        });
        
    }, 10);
    
});

/* Add bxSlider to screens */

$(document).ready(function () {
	
	'use strict';
	
    $('.bxslider').bxSlider({
		
		slideWidth: 292.5,
		auto: true,
		minSlides: 1,
		maxSlides: 3,
		slideMargin: 50
		
	});
});

/* Add Counter-Up JS */

$(document).ready(function () {

	'use strict';
	
	$('.counter-num').counterUp({
		
    	delay: 10,
    	time: 2000
		
	});

});

/* Add animation */

$(document).ready(function () {
	
	'use strict';
	
	new WOW().init();
	
});