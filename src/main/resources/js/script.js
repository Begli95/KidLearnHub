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

    $('.item_1').on('click',function(){
        $('.modal__week__item_1').trigger('click'); 
        return false;
    });
    $('.item_2').on('click',function(){
        $('.modal__week__item_2').trigger('click'); 
        return false;
    });
    $('.item_3').on('click',function(){
        $('.modal__week__item_3').trigger('click'); 
        return false;
    });
    $('.item_4').on('click',function(){
        $('.modal__week__item_4').trigger('click'); 
        return false;
    });
    $('.item_5').on('click',function(){
        $('.modal__week__item_5').trigger('click'); 
        return false;
    });
    $('.item_6').on('click',function(){
        $('.modal__week__item_6').trigger('click'); 
        return false;
    });
    $('.item_7').on('click',function(){
        $('.modal__week__item_7').trigger('click'); 
        return false;
    });

    $('.time_1').on('click',function(){
        $('.modal__time__item_1').trigger('click'); 
        return false;
    });
    $('.time_2').on('click',function(){
        $('.modal__time__item_2').trigger('click'); 
        return false;
    });
    $('.time_3').on('click',function(){
        $('.modal__time__item_3').trigger('click'); 
        return false;
    });
    $('.time_4').on('click',function(){
        $('.modal__time__item_4').trigger('click'); 
        return false;
    });
    $('.time_5').on('click',function(){
        $('.modal__time__item_5').trigger('click'); 
        return false;
    });
    $('.time_6').on('click',function(){
        $('.modal__time__item_6').trigger('click'); 
        return false;
    });
    
    

    function toggleCheckboxtime(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.modal__time__item').eq(i).toggleClass('modal__time__item_active');
            });
        });
    };

    toggleCheckboxtime ('.modal__time__item');

    $('.video__play').on('click',function() {
        $('.overplay, #video').fadeIn('slow');
    });

    $('.modal__close-video').on('click', function() {
        $('.overplay, #video').fadeOut('10');
        var iframe = document.querySelector('#youtube-iframe');
        var source = iframe.src;
        iframe.src = source;

    });

    $('.btn__header').on('click',function() {
        $('.overlay, #order').fadeIn('slow');
        $('.header').toggleClass('header_active');
        document.body.style.overflow = "hidden";
    });

    $('.description__btn_promo').on('click',function() {
        $('.overlay, #order').fadeIn('slow')
        $('.header').toggleClass('header_active');
        document.body.style.overflow = "hidden";
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #order').fadeOut('slow');
        $('.header').removeClass('header_active');
        document.body.style.overflow = "";
        
    });


    $('.button_mini').each(function(i) {
        $(this).on('click',function() {
            $('.overlay, #order').fadeIn('slow');
            $('.header').toggleClass('header_active');
            document.body.style.overflow = "hidden";
        });
    });

/*     jQuery(function($){
        $(document).mouseup( function(e){ // событие клика по веб-документу
            var div = $( "#order" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                $('.overlay, #order').fadeOut('slow');; // скрываем его
            }
        });
    }); */

    $("a[href=#catalog]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

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
                },
                days: {
                    required: true
                },
                time: {
                    required: true
                },

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
                },
                days: {
                    required: "Выберите день",
                },
                time: {
                    required: "Выберите время",
                },
            }
        });
    };

    validateForms('#order form');
    validateForms('.modal__footer form');
    
 
    $('input[name=phn]').mask("+7 (999) 999-9999");

/*     function checkChooseWeeks($) {
        var isChoose = false;
        $('.modal__week__item').each(function(){            
            if ($(this).hasClass('modal__week__item_active')) {
                isChoose = true;
            // Выполнение определенных действий, если класс присутствует
            } 
            
        });
        return isChoose;
    }

    $('#check').on('click',function() {
        checkChooseWeeks('.modal__week__item');        
        if (checkChooseWeeks()) {
            alert ("Отправил");
        } else{
            alert ("Не отправил");     
        }
    }); */


    


    

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


