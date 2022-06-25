
// работа слайдера Owl Carousel

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 3,
    margin: 20,
    rewind: true,
    nav: true,
    navText: ['', ''],
    dots: true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      650:{
        items:2,
        nav:true
      },
      1110:{
        items:3,
        nav:true
      },
    }
  });
});


// работа ввода по маске Inputmask в модальных окнах 

$(document).ready(function(){
  $('.modal-input-email').inputmask('email');
  $('.modal-input-phone').inputmask('+7(999) 999-9999');
});


// работа мобильного меню

$(function() {
  var $menu_cover = $('#menu-cover');
 
  $(".hamburger-box").click(function(){   // по нажатию на кнопку меню:
    $('body').addClass('body_pointer'); // изменяем курсор на pointer
    $('body').addClass('fixed');        // блокируем тач 
    $('body').css('overflow','hidden'); // блокируем скролл
    $menu_cover.show(0);                // отображаем скрытое слева меню без задержки
    $menu_cover.animate(                // с анимацией появления слева в 300 мс
      {left: parseInt($menu_cover.css('left'),10) == 0 ? -$menu_cover.outerWidth() : 0}, 
      300
    );
  }); 
  
  $(".menu-close").click(function(){       // по нажатию на крестик:
    $('body').removeClass('body_pointer'); // отменяем изменение курсора 
    $('body').removeClass('fixed');        // отменяем блокировку тача 
    $('body').css('overflow','auto');      // отменяем блокировку скролла 
    $menu_cover.animate(                   // с анимацией в 300 мс
      {left: parseInt($menu_cover.css('left'),10) == 0 ? -$menu_cover.outerWidth() : 0}, 
      300, 
      function(){
        $menu_cover.hide(0);               // скрываем меню без задержки
      });
  }); 
  
  $('#menu-cover ul li').click(function(){    // по нажатию на cсылку в меню:
      $('body').removeClass('body_pointer');  // отменяем изменение курсора 
      $('body').removeClass('fixed');         // отменяем блокировку тача 
      $('body').css('overflow','auto');       // отменяем блокировку скролла 
      $menu_cover.animate(
        {left: parseInt($menu_cover.css('left'),10) == 0 ? -$menu_cover.outerWidth() : 0}, 
        300, 
        function(){
          $menu_cover.hide(0);                // скрываем меню без задержки
        });                                   // ну и переходим по ссылке
    });
});


