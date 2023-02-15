
/*--- header starts from here ------*/

function onClickMenu(){
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}

/*----- header ends here ------*/


/*---- counter starts from here ----*/

var counted = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

/*------ Counter Ends Here -------*/


/*------Filter starts from here ----*/

$(document).ready(function(){
    $('.portfolio-item').isotope(function(){
        itemSelector:'.item'
      });
  
  
  
    $('.portfolio-menu ul li').click(function(){
      $('.portfolio-menu ul li').removeClass('active');
      $(this).addClass('active');
  
  
      var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
          filter: selector
        })
        return false;
    });
  });


/*------- filter ends  here ------*/

/*------ fancy box starts from here -----*/
$(document).ready(function(){
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});
});

/*-------  fancy box ends  here  -------*/

/*--------- Load More button starts from here -----*/

$(document).ready(function(){
  $(".child-box").slice(0, 6).show();
  $("body").on('click touchstart', '.load-more', function (e) {
      e.preventDefault();
      $(".child-box:hidden").slice(0, 3).slideDown();
      if ($(".child-box:hidden").length == 0) {
          $(".child-box").css('visibility', 'hidden');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 1000);
  });
});



/*------ load more button ends here -----*/