
$(document).ready(function(){

  // banner owl carousel
  $("#banner-area .owl-carousel").owlCarousel({
      dots: true,
      autoplay:true,
      autoplayTimeout:2000,
      loop: true,
      items: 1
  });

  // Promo carousel
  $("#top-sale .owl-carousel").owlCarousel({
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 1900,
      responsive : {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000 : {
              items: 5
          }
      }
  });
  // Isotope Selector
     var $grid = $('.grid').isotope({
       itemSelector: '.grid-item',
       layoutMode: 'fitRows',
       getSortData: {
         name: function (element) {
           return $(element).text();
         }
       }
     });
     $('.filter button').on("click", function () {
       var value = $(this).attr('data-name');
         $grid.isotope({
           filter: value
         });
       $('.filter button').removeClass('active');
       $(this).addClass('active');
     })
     $('button').on("click", function () {
       var value = $(this).attr('data-name');
       $grid.isotope({
         sortBy: value
       });
       $('button').removeClass('active');
       $(this).addClass('active');
     })
});

