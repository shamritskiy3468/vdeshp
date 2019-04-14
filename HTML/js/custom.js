/*---------------------------------
[Master Javascript]

Project: Party Club
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var party_club = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Party Club Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Slider();
            this.Timeline();
            this.Gallery();
            this.Testimonial();
            this.Team();
            this.Counter();
            this.Mobilemenu();
        },
        /*-------------- Party Club Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            // On Right-to-left(RTL) add class 
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },


        //Banner Slider

        Slider: function() {
            if ($(".rev_slider_wrapper").length) {

                var tpj = jQuery;

                var revapi1068;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_1068_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1068_1");
                    } else {
                        revapi1068 = tpj("#rev_slider_1068_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "plugin/revolution/js",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "off",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "vertical",
                                    drag_block_vertical: false
                                },
                                bullets: {
                                    enable: true,
                                    hide_onmobile: true,
                                    hide_under: 1024,
                                    style: "uranus",
                                    hide_onleave: false,
                                    direction: "vertical",
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 30,
                                    v_offset: 0,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-inner"></span>'
                                }
                            },
                            viewPort: {
                                enable: true,
                                outof: "wait",
                                visible_area: "80%",
                                presize: false
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "single",
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
                            autoPlay: "off",
                            fullScreenAutoWidth: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: ".header",
                            fullScreenOffset: "",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                }); /*ready*/
            }
        },

        //Timeline Slider
        Timeline: function() {
            $('.pc_timeline_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            })

        },
        //Gallery
        Gallery: function() {
            $('.pc_gal_wrapper').magnificPopup({
                delegate: 'a',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
                },

            });

        },
        //Testimonial Slider

        Testimonial: function() {
            $('.pc_testi_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            })

        },
        //Team Slider
        Team: function() {
            $('.pc_team_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }
            })

        },
        //Counter
        Counter: function() {
            if ($('.pc_counter_box').length > 0) {
                $('.pc_counter_box').appear(function() {
                    $('.pc_counter_num').countTo();
                });
            }

        },

        //On click mobile menu
        Mobilemenu: function() {
            $(".pc_menu_btn").click(function() {
                $(".pc_temp_menu").addClass('open_menu');
            });
            $(".pc_menu_close").click(function() {
                $(".pc_temp_menu").removeClass('open_menu');
            });


        }


    };

    $(document).ready(function() {
        party_club.init();

    });

    //On load window
    $(window).on('load', function() {
        var $container = $('.grid');
        $container.isotope({
            //layoutMode: 'fitRows',
            itemSelector: '.element-item',
            percentPosition: true,
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
                isFitWidth: true,
            }
        });

        $('.portfolio-filter a').click(function() {
            $('.portfolio-filter .active').removeClass('active');
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

        //Loader
        jQuery(".loader").fadeOut();
        jQuery(".loader").delay(600).fadeOut("slow");


    });


    //On scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
        if (wh > 767) {
            var h = window.innerHeight;
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 100) {
                $('.pc_menu_wrapper').addClass('pc_fixed');
            } else {
                $('.pc_menu_wrapper').removeClass('pc_fixed');
            }
        }

    });




})(jQuery);