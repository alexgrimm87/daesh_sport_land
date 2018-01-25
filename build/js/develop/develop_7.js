function scrollNav(){

  $(window).scroll(function(){
    var st = $(window).scrollTop();
    var block = $('.section03').offset().top;
    if(st >= block) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
  });

};



function decoHide(){
  $('#problemAll').on('click', function(e) {
    e.preventDefault();
    $('.problem-hidden').addClass('active');
    $('.problem-all').addClass('hide');
  });

  $('#bundleGreen').on('click', function(e) {
    e.preventDefault();
    $('.hide-bundle-green').addClass('active');
    $('.bundles-all-green').addClass('hide');
  });

  $('#bundleYellow').on('click', function(e) {
    e.preventDefault();
    $('.hide-bundle-yellow').addClass('active');
    $('.bundles-all-yellow').addClass('hide');
  });

  $('.viber-btn').on('click', function(e) {
    e.preventDefault();
    var fieldWrap = $(this).closest('.request').prev('form').find('.fields-wrap');
    var nameField = $(this).closest('.request').prev('form').find('.name-field');
    var inputTel =  $(this).closest('.request').prev('form').find('input[type="tel"]');
    nameField.addClass('hide');
    fieldWrap.addClass('center');
    inputTel.attr({'name': 'viber', 'placeholder': 'Введите Ваш Viber'});
  });

  $('.whatsup-btn').on('click', function(e) {
    e.preventDefault();
    var fieldWrap = $(this).closest('.request').prev('form').find('.fields-wrap');
    var nameField = $(this).closest('.request').prev('form').find('.name-field');
    var inputTel =  $(this).closest('.request').prev('form').find('input[type="tel"]');
    nameField.addClass('hide');
    fieldWrap.addClass('center');
    inputTel.attr({'name': 'whatsup', 'placeholder': 'Введите Ваш WhatsUp'});
  });

};


function sliders(){
  $('.carousel-left').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.carousel-right',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    verticalSwiping: true
  });

  $('.carousel-right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    draggable: false,
    asNavFor: '.carousel-left'
  });

  $('.certificate-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  });

  $('.certificate-prev').on('click', function(e) {
    e.preventDefault();
    $('.certificate-slider').slick('slickPrev');
  });

  $('.certificate-next').on('click', function(e) {
    e.preventDefault();
    $('.certificate-slider').slick('slickNext');
  });

  $('.carousel-left-prev').on('click', function(e) {
    e.preventDefault();
    $('.carousel-left').slick('slickPrev');
  });

  $('.carousel-left-next').on('click', function(e) {
    e.preventDefault();
    $('.carousel-left').slick('slickNext');
  });

  $('.program-top').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 533,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows:true,
          slidesToShow: 1
        }
      }
    ]
  });

  // $('.program-left').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   arrows: false,
  //   dots: false,
  //   responsive: [
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows:true,
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

  $('.statistics-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows:true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 615,
        settings: {
          arrows:true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews-wrap').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1681,
        settings: {
          arrows:true,
          slidesToShow: 9
        }
      },
      {
        breakpoint: 1401,
        settings: {
          arrows:true,
          centerMode:true,
          slidesToShow: 8

        }
      },
      {
        breakpoint: 1281,
        settings: {
          arrows:true,
          centerMode:true,
          slidesToShow: 7
        }
      },
      {
        breakpoint: 1153,
        settings: {
          arrows:true,
          centerMode:true,
          slidesToShow: 6

        }
      },
      {
        breakpoint: 1025,
        settings: {
          arrows:true,
          centerMode:true,
          slidesToShow: 5

        }
      },
      {
        breakpoint: 855,
        settings: {
          arrows:true,
          centerMode:true,
          slidesToShow: 4

        }
      },
      {
        breakpoint: 705,
        settings: {
          arrows:true,
          centerMode:true,
          slidesToShow: 3

        }
      },
      {
        breakpoint: 577,
        settings: {
          arrows:true,
          centerMode:true,
          slidesToShow: 2

        }
      },
      {
        breakpoint: 391,
        settings: {
          arrows:true,
          centerMode:true,
          slidesToShow: 1
        }
      }
    ]
  });

};




function popUps(){
  $('.certificate-item').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 640,
    height : 250,
    maxWidth : '100%',
    wrapCSS:'certificate-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });

  $('.bundleLink').fancybox({
    'beforeLoad': function(){
      price = $(this.element).closest('.bundles-item').find('.bundle-top span').clone(); 
    },
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 640,
    height : 250,
    maxWidth : '100%',
    wrapCSS:'bundle-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0',
    'afterLoad': function(){
      this.content.find('.call-title').append(price);
    },
    'afterClose': function(){
      this.content.find('.call-title span').empty();
    },
    beforeShow: function(){
      $(".fancybox-skin").css({
          backgroundColor: "transparent"
      });
    },
    helpers: {
      overlay: {
        css: { 
          "background": "url('images/results-popup-bg.jpg') no-repeat",
          "background-size": "cover"
        }
      }
    }
  });


  $('.results-btn').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 640,
    height : 250,
    maxWidth : '100%',
    wrapCSS:'results-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0',
    beforeShow: function(){
      $(".fancybox-skin").css({
          backgroundColor: "transparent"
      });
    },
    helpers: {
      overlay: {
        css: { 
          "background": "url('images/results-popup-bg.jpg') no-repeat",
          "background-size": "cover"
        }
      }
    }
  });

  $('.questions-btn').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 640,
    height : 250,
    maxWidth : '100%',
    wrapCSS:'questions-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0',
    beforeShow: function(){
      $(".fancybox-skin").css({
          backgroundColor: "transparent"
      });
    },
    helpers: {
      overlay: {
        css: { 
          "background": "url('images/results-popup-bg.jpg') no-repeat",
          "background-size": "cover"
        }
      }
    }
  });

  $('.feedback-btn').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 640,
    height : 250,
    maxWidth : '100%',
    wrapCSS:'feedback-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0',
    beforeShow: function(){
      $(".fancybox-skin").css({
          backgroundColor: "transparent"
      });
    },
    helpers: {
      overlay: {
        css: { 
          "background": "url('images/results-popup-bg.jpg') no-repeat",
          "background-size": "cover"
        }
      }
    }
  });

  $('.reviews-item').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 640,
    height : 250,
    maxWidth : '100%',
    wrapCSS:'reviews-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });

  $('.userFull').fancybox({
  'beforeLoad': function(){
      lists = $(this.element).closest('.user-comment-wrap').find('.user-comment').clone(); 
    },
    openEffect: 'fade',
    closeEffect: 'fade',
    autoResize: true,
    width : 1024,
    height : 768,
    'closeBtn': true,
    fitToView: true,
    padding: '0',
    wrapCSS:'user-wrap',
    'afterLoad': function(){
      this.content.find('.results-wrap').append(lists);
    },
    'afterClose': function(){
      this.content.find('.results-wrap').empty();
    },
 });

  $('.terms-link').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 640,
    height : 250,
    maxWidth : '100%',
    wrapCSS:'terms-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });

};


function accordion(){
  $('.quest').click(function(){
    $(this).closest('.questions').find('.answer').slideUp();
    $(this).closest('.questions').find('i').removeClass('active');
    if($(this).next('.answer').css('display') == 'none') {
      $(this).next('.answer').slideDown();
      $(this).find('i').addClass('active');
    } else {
      $(this).next('.answer').slideUp();
      $(this).find('i').removeClass('active');
    }
  });
};



$(document).ready(function(){

  // text = $('.user-comment').find('p').text();
  // var sliced = text.slice(0,100);
  // if (sliced.length < text.length) {
  //   sliced += '...';
  // }
  // $('.user-comment').find('p').text(sliced);

  if( $(window).width() > 992 ) {
    scrollNav();
  };

  decoHide();
  sliders();
  popUps();
  accordion();

  // $('.program_btn').on("click", function(){
  //   yaCounter42709924.reachGoal('1f');
  // });
  // $('#test_btn').on("click", function(){
  //   yaCounter42709924.reachGoal('Test');
  // });
  // $('.results-btn').on("click", function(){
  //   yaCounter42709924.reachGoal('Otz');
  // });
  // $('#econom').on("click", function(){
  //   yaCounter42709924.reachGoal('Prog1');
  // });
  // $('#standart').on("click", function(){
  //   yaCounter42709924.reachGoal('Prog2');
  // });
  // $('#vip').on("click", function(){
  //   yaCounter42709924.reachGoal('Prog3');
  // });
  // $('.questions-btn').on("click", function(){
  //   yaCounter42709924.reachGoal('Vopros');
  // });
  // $('.idividual_btn').on("click", function(){
  //   yaCounter42709924.reachGoal('PoslForma');
  // });


});



$(window).load(function(){

});

$(window).resize(function(){

});