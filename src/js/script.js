let slider = $(document).ready(function () {
  $('.hero__info_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    
    autoplay: true,
    autoplaySpeed: 2500
  });
});

