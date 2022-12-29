$(".header__burger").on("click", function () {
  $(".header__burger").toggleClass("active");
  $(".header__burger_menu").toggleClass("active");
  gsap.fromTo(
    ".header__burger_menu",
    {
      scale: 2,
    },
    {
      duration: 1,
      scale: 1,
    }
  );
  gsap.from(".header__burger_menu li", {
    duration: 1,
    x: -1000,
  });
});
$(".header__burger_menu a").on("click", function () {
  $(".header__burger_menu").removeClass("active");
  $(".header__burger").removeClass("active");
});
let slider = $(document).ready(function () {
  $(".hero__info_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 688,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".content__tabs").slick({
    centerMode: true,
    focusOnSelect: true,
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $(".news__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    focusOnSelect: true,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:
      "<img class='a-left control-c prev arrow-prev' src='../img/white-arrow-left.svg'>",
    nextArrow:
      "<img class='a-right control-c next arrow-next' src='../img/white-arrow-right.svg'>",
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "4px",
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

gsap.registerPlugin(ScrollTrigger);

gsap.to(".bg__text", {
  scrollTrigger: {
    toggleActions: "restart pause resume pause",
    scrub: true,
  },
  x: -1500,
});
gsap.to("#branch", {
  scrollTrigger: {
    toggleActions: "restart pause resume pause",
    scrub: true,
    start: 1000,
  },
  y: -600,
});
gsap.to("#hero-bg", {
  scrollTrigger: {
    toggleActions: "restart pause resume pause",
    scrub: true,
  },
  y: 1000,
});
gsap.to(".hero__gradient", {
  scrollTrigger: {
    toggleActions: "restart pause resume pause",
    scrub: true,
  },
  y: 1000,
});
gsap.to(".map__img_cloud-down", {
  x: -500,
  scrollTrigger: {
    toggleActions: "restart pause resume pause",
    scrub: true,
    start: 2000,
  },
});

gsap.to(".map__img_cloud-up", {
  scrollTrigger: {
    toggleActions: "restart pause resume pause",
    scrub: true,
    start: 2000,
    rotation: 20,
  },
  x: 500,
});
gsap.to(".map__img, .map__img_shadow", {
  scrollTrigger: {
    toggleActions: "restart pause resume pause",
    scrub: true,
    start: 2000,
    x: 20,
    y: 20,
  },
});
