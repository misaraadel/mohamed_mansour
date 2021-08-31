$(document).ready(function () {
    /*start the loading page */
    $('.loader').fadeOut(1000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //fancybox 
    $('.fancybox').fancybox({
        arrows: false,
        loop: false,
        keyboard: false,
        infobar: false,
        protect: true,
        hideScrollbar: true,
        touch: false ,
        image: {
            preload: true
        },
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });
    //start active navbar
    $('.nav-toggler').click(function(){
        $('.nav-toggler').toggleClass('active');
        $('.nav-content').toggleClass('acitve-nav');
        $('body').toggleClass('overflowNone')
    });
    //owl header screen 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 1000,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });
    //projects slider 
    $('.owl-projects').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    //partaners slider 
    $('.owl-partaners').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
});