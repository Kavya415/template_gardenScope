/**
 * Created by Kavya Sree.
 */


//Loader
$(window).load(function() {
    $("#status").fadeOut("slow");
    $("#loader").delay(1000).fadeOut("slow").remove();
});




$(window).bind('scroll', function() {
    var navHeight = $(window).height() - 500;
    if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
    } else {
        $('.navbar-default').removeClass('on');
    }
});

$('a.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 80
            }, 900);
            return false;
        }
    }
});


$('body').scrollspy({
    target: '.navbar-default',
    offset: 80
});


$(".navbar-nav li a").click(function (event) {
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
});


new WOW().init();




// Lightcase
$(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase();
});


//Isotope Plugin
$(window).load(function() {
    var $container = $('.services');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.categories a').click(function() {
        $('.categories .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});



//Testimonials Slider
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[990,1],
        itemsTablet:[768,1],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        autoPlay:true
    });
});


$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".navbar-brand").toggle();
    });
});
