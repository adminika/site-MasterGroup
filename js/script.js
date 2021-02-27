 window.addEventListener('DOMContentLoaded', function()  {
    
    

    const menu = document.querySelector('.top__list'),
    menuItem = document.querySelectorAll('.top__menu-link'),
    hamburger = document.querySelector('.top__hamburger');

    console.log (menu);
    console.log (menuItem);
    console.log (hamburger);

    hamburger.addEventListener('click', function()  {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('top_active');

    });
    for (var i=0; i < menuItem.length; i++) {
      var element = menuItem[i];
      console.log (element);
        element.addEventListener('click', function(){
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('top_active');
      });
    };
   
  //Слайдер 
  $('.slide').slick({
    
  });
  
  //Маска номера для валидации номера телефона
  
  $('input[name=phone').mask("+7(999) 999-99-99");
  

  //scroll and page up

$(window).scroll(function(){
    if ($(this).scrollTop() > 1000) {
     $('.pageup').fadeIn(); 
    }  
    else 
    $('.pageup').fadeOut();
  
  });

  //Скрипт для любого якоря при нажатии на ссылку будет плавная прокрутка к id="header" 

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

//Скрип вызова модального окна при клике на кнопку и закрытие при нажатии на крестик

$('.header__button,.promo__button,.special__button').on('click', function() {
 
  $('.overlay,#Modal').fadeIn('slow');
  document.body.style.overflow = 'hidden'; // Убираем прокрутку
});

$('.close').on('click', function(){

  $('.overlay, #Modal, #Modal_mini').fadeOut('slow');
  document.body.style.overflow = ''; // Восстанавливаем прокрутку
});

    
 });
