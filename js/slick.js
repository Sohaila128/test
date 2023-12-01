    //===== Slick MOST SELLING
    $('.most-slied').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      ]
  });

  //===== Slick Offers
    $('.offers-slid').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      ]
  });

  $(document).ready(function() {
    // Change heart icon on hover
    $('.heartIcon').hover(
        function() {
            $(this).removeClass('bi-heart').addClass('bi-heart-fill');
        },
        function() {
            $(this).removeClass('bi-heart-fill').addClass('bi-heart');
        }
    );
});


$('.related-slied').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
  nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
    }
  },
  ]
});

$('.related-slied').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
  nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
    }
  },
  ]
});
