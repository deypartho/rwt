import {  Injectable} from '@angular/core';
declare var Waypoint: any;
declare var counter1: any;
declare var $: any;
declare var AOS: any;
@Injectable({
  providedIn: 'root'
})
export class CustomjsService {

  constructor() {
    AOS.init({
      duration: 800,
      easing: 'slide'
    });
  }
scrollWindow(){
  $(window).scroll(function(){

    var $w = $(this),

        st = $w.scrollTop(),

        navbar = $('.ftco_navbar'),

        sd = $('.js-scroll-wrap');

    if (st > 150) {

      if ( !navbar.hasClass('scrolled') ) {

        navbar.addClass('scrolled');

      }

    }

    if (st < 150) {

      if ( navbar.hasClass('scrolled') ) {

        navbar.removeClass('scrolled sleep');

      }

    }

    if ( st > 350 ) {

      if ( !navbar.hasClass('awake') ) {

        navbar.addClass('awake');

      }



      if(sd.length > 0) {

        sd.addClass('sleep');

      }

    }

    if ( st < 350 ) {

      if ( navbar.hasClass('awake') ) {

        navbar.removeClass('awake');

        navbar.addClass('sleep');

      }

      if(sd.length > 0) {

        sd.removeClass('sleep');

      }

    }

  });

}
  carousel(){
    $('.home-slider').owlCarousel({

	    loop:true,

	    autoplay: true,

	    margin:0,

	    animateOut: 'fadeOut',

	    animateIn: 'fadeIn',

	    nav:false,

	    autoplayHoverPause: false,

	    items: 1,

	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],

	    responsive:{

	      0:{

	        items:1,

	        nav:false

	      },

	      600:{

	        items:1,

	        nav:false

	      },

	      1000:{

	        items:1,

	        nav:false

	      }

	    }

		});

		$('.carousel-work').owlCarousel({

			autoplay: true,

			center: true,

			loop: true,

			items:1,

			margin: 30,

			stagePadding:0,

			nav: true,

			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],

			responsive:{

				0:{

					items: 1,

					stagePadding: 0

				},

				600:{

					items: 2,

					stagePadding: 50

				},

				1000:{

					items: 3,

					stagePadding: 100

				}

			}

		});

  }
  loader(){
    setTimeout(function() {

			if($('#ftco-loader').length > 0) {

				$('#ftco-loader').removeClass('show');

			}

		}, 1);

  }
  fullHeight(){
    $('.js-fullheight').css('height', $(window).height());

		$(window).resize(function(){

			$('.js-fullheight').css('height', $(window).height());

		});

  }
  counterData() {
    $('#section-counter').waypoint(function (direction) {

      //	alert('way point');

      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

        $('.number').each(function () {

          var $this = $(this),

            num = $this.data('number');

          console.log(num);

          $this.animateNumber(

            {

              number: num,

              numberStep: comma_separator_number_step

            }, 7000

          );

        });



      }

    }, {
      offset: '95%'
    });
  }

  contentWayPoint() {
    var i = 0;

    $('.ftco-animate').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .ftco-animate.item-animate').each(function (k) {

            var el = $(this);

            setTimeout(function () {

              var effect = el.data('animate-effect');

              if (effect === 'fadeIn') {

                el.addClass('fadeIn ftco-animated');

              } else if (effect === 'fadeInLeft') {

                el.addClass('fadeInLeft ftco-animated');

              } else if (effect === 'fadeInRight') {

                el.addClass('fadeInRight ftco-animated');

              } else {

                el.addClass('fadeInUp ftco-animated');

              }

              el.removeClass('item-animate');

            }, k * 50, 'easeInOutExpo');

          });



        }, 100);



      }

    }, {
      offset: '95%'
    });

  }
}