let slider = $(document).ready(function () {
  $(".hero__info_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,

    autoplay: true,
    autoplaySpeed: 2500,
  });
  $(".content__tabs").slick({
    centerMode: true,
 
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow:
      "<img class='a-left control-c prev arrow-prev' src='../img/white-arrow-left.svg'>",
    nextArrow:
      "<img class='a-right control-c next arrow-next' src='../img/white-arrow-right.svg'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          vertical: true,
          verticalScrolling: true,
          slidesToShow: 3,
          speed: 1000,
          arrows: false,
        },
      },
    ],
  });
});

$(".item").on("click", function () {
  $(".item").removeClass("active");
  $(this).addClass("active");
  let tabs = $(this).data("tabs");
  $(".content").addClass("d-none");
  $(".content[data-tabs = " + tabs + "]").removeClass("d-none");
  $(".content[data-tabs = " + tabs + "]").addClass("d-block");
});

function parallax(){ 
  var windowPosition = $(window).scrollTop();
  var windowHeight = $(window).height();
  $('.bg').each(function() { 
      var elementImage = $(this).find('img');
      var imageHeight = elementImage.height();
      var elementBottom = $(this).position().top + $(this).outerHeight(true);
      scrollPercent = 100 * (elementBottom - windowPosition) / (windowHeight + imageHeight);
      elementImage.css('object-position', '0% ' + scrollPercent + '%');
  });
};

$(document.body).on('touchmove', parallax);
$(window).bind('scroll', parallax);