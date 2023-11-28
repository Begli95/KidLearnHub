$(document).ready(function(){
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };
    
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    function toggleCheckboxweek(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.modal__week__item').eq(i).toggleClass('modal__week__item_active');
            });
        });
    };

    toggleCheckboxweek ('.modal__week__item');

    function toggleCheckboxtime(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.modal__time__item').eq(i).toggleClass('modal__time__item_active');
            });
        });
    };

    toggleCheckboxtime ('.modal__time__item');

    $('.header__logo').on('click',function() {
        $('.entrance, #thanks').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.entrance, #thanks').fadeOut('slow');
    });

    $('.video__play').on('click',function() {
        $('.overplay, #video').fadeIn('slow');
    });

    $('.modal__close-video').on('click', function() {
        $('.overplay, #video').fadeOut('slow');
    });

    $('.btn__header').on('click',function() {
        $('.overlay, #order').fadeIn('slow');
    });

    $('.description__btn_promo').on('click',function() {
        $('.overlay, #order').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #order').fadeOut('slow');
    });


    $('.button_mini').each(function(i) {
        $(this).on('click',function() {
            $('.overlay, #order').fadeIn('slow');
        });
    });

    jQuery(function($){
        $(document).mouseup( function(e){ // событие клика по веб-документу
            var div = $( "#order" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                $('.overlay, #order').fadeOut('slow');; // скрываем его
            }
        });
    });

    $("a[href=#catalog]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('input[name=phn]').mask("+7 (999) 999-9999");

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phn:'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phn: "Пожалуйста, введите свой номер",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адресс почты"
                }
            }
        });
    };

    validateForms('#order form');
    validateForms('.modal__footer form');

    

   /*  $(document).ready(function() {
        var bg = $("#background");
        var x = 0;
        var y = 0;
        var speedX = 0.5;
        var speedY = 0.2;
 
        setInterval(updateBackground, 10); // Обновление фона каждые 10 миллисекунд
 
        function updateBackground() {
            x += speedX;
            y += speedY;
 
            bg.css("background-position", x + "px " + y + "px");
        }
    }); */

});