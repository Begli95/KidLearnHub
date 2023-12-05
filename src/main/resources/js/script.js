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
        $('.thank, #thanks').fadeOut('slow');
        $('.header').removeClass('header_active');
        document.body.style.overflow = "";
        
    });

    $('.modal__close-error').on('click', function() {
        $('.errors, #errorses').fadeOut('slow');
       
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
                weeks: {
                    required: true
                },
                times: {
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
                weeks: {
                    required: "Выберите день",
                },
                times: {
                    required: "Выберите время",
                },
            }
        });
    };

    validateForms('#order form');
    validateForms('.modal__footer form');
    
 
    $('input[name=phn]').mask("+7 (999) 999-9999");


});

$(document).ready(function() {
    $('.result').on('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        var formData = {
            tariff: $('.select').val(),
            name: $('.names').val(),
            phone: $('.phone').val(),
            email: $('.email').val(),
            schedule: [],
            time: []
        };
        
        // Добавляем выбранные дни недели в массив
        $('.modal__week input[name="days"]').each(function() {
            // Проверяем, выбран ли чекбокс
            if ($(this).is(':checked')) {
                // Если выбран, добавляем значение соответствующего дня недели в массив
                var dayOfWeek = $(this).nextAll('input[name="week"]').first().val();
                formData.schedule.push(dayOfWeek);
                
            }
        });
        /* // Добавляем выбранные дни недели в массив
        $('.modal__week__item_active').each(function() {
            formData.schedule.push($(this).siblings('.modal__week__item_active').val());
        }); */
        
        // Добавляем выбранное время в массив
        $('.modal__time input[name="time"]:checked').each(function() {
            if ($(this).is(':checked')) {
                // Если выбран, добавляем значение соответствующего дня недели в массив
                var dayOfTime = $(this).nextAll('.modal__time__item').first().val();
                formData.time.push(dayOfTime);
            }
        });

        var jsonData = JSON.stringify(formData);

        console.log('JSON данных:', jsonData);
        
        // Отправляем данные на сервер с помощью AJAX
        $.ajax({
            type: 'POST',
            url: 'http://localhost:7070/request', // Замени это на свой URL
            data: JSON.stringify(formData), // Отправляем данные в формате JSON
            contentType: 'application/json',
            success: function(response) {
                // Действия при успешной отправке
                $('.overlay, #order').fadeOut('slow');
                $('.thank, #thanks').fadeIn('slow');
            },
            error: function(err) {
                // Действия при ошибке отправки
                $('.errors, #errorses').fadeIn('slow');
            }
            
        });
    });

    $('#check').on('click',function(){
        $('.result').trigger('click');
        validateForms('#order form');
        validateForms('.modal__footer form');
        
        
         
    });
    $('#check').on('click',function(e){
        
        
        
         
    });
});




