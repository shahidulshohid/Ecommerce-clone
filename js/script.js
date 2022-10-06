$(function($){

       // toggle_catery menu js
       $('.toggle_category_header').on('click',function(){
        $('.toggle_category_header i.fa-angle-down').toggleClass('toggle_icon');
        $('.toggle_category_menu').slideToggle(300);
    })

    // hero part slick slider
    $('.hero_slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:false,
        dots:true,
        dotsClass:'banner_dots'
      });


    //   wow js effect
    new WOW().init();

    // best sell slick slider
    $('.best_category_slide').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows:false,
      dots:true,
      dotsClass:'best_category_dots'
    });

    
   // hot sale right part effect
   var swiper = new Swiper(".dream_add", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "500": {
        slidesPerView: 1,
      },
      "768": {
        slidesPerView: 2,
      },
      "992": {
        slidesPerView: 3,
      },
     
    },
  });

  //menu effects and top to button effect

  let MenuTop=$('#header_menu').offset().top;

  // scroll effects
    $(window).on('scroll', function(){
      let scrollToTop=$(window).scrollTop();

      // menu fix js effets
      if(scrollToTop > MenuTop){
      $('#header_menu').addClass("menu_fix");
        }else{
            $('#header_menu').removeClass("menu_fix");
        }

    }) 

    // inner top_cat part slider effect here
    $('.problem_solve').slick({
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      arrows:false,
    });

     $('.swiper_slider').slick({
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      arrows:true,
      prevArrow:'<i class="fa-solid fa-angle-left arrow_left_design"><i>',
      nextArrow:'<i class="fa-solid fa-angle-right arrow_right_design"><i>',
    });





// zoom plugin js
jQuery(document).ready(function() {
  jQuery('.imgZoom').mooZoom(options);
});

var options = {
  zoom: {
      width:150,
      height: 150,
      zIndex: 600
  },
  overlay: {
      opacity: 0.65,
      zIndex: 500,
      backgroundColor: '#000000',
      fade: true
  },
  detail: {
      zIndex: 600,
      margin: {
          top: 0,
          left: 30
      },
      fade: true
  }
};



  });


  


