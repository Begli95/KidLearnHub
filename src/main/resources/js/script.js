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

    


});




$(document).ready(function() {

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
        return $(form).valid();
    };
      
    $('input[name=phn]').mask("+7 (999) 999-9999");

    $('#checkValidForm').on('click', function(e){
        e.preventDefault();
    });
    
    $('#checkValidForm').on('click', function(){
         
        var forms = $('#order form');
        var allValid = true;
        var formDataArray = {
            tariff: $('.select-modal').val(),
            name: $('.names-modal').val(),
            phone: $('.phone-modal').val(),
            email: $('.email-modal').val(),
            schedule: [],
            time: []
        };

        // Добавляем выбранные дни недели в массив
        $('.modal__week input[name="days"]').each(function() {
            // Проверяем, выбран ли чекбокс
            if ($(this).is(':checked')) {
                // Если выбран, добавляем значение соответствующего дня недели в массив
                var dayOfWeek = $(this).nextAll('input[name="week-modal"]').first().val();
                formDataArray.schedule.push(dayOfWeek);
                
            }
        });
        
        // Добавляем выбранное время в массив
        $('.modal__time input[name="time"]:checked').each(function() {
            if ($(this).is(':checked')) {
                // Если выбран, добавляем значение соответствующего дня недели в массив
                var dayOfTime = $(this).nextAll('input[name="time-modal"]').first().val();
                formDataArray.time.push(dayOfTime);
            }
        });


        forms.each(function(){
            if(!validateForms(this)){
                allValid = false;
            } 
            console.log(JSON.stringify(formDataArray, null, 2));
        });

        if(allValid){
            // Отправка данных на сервер
            $.ajax({
                type: 'POST',
                url: 'http://localhost:7070/requestClient',
                data: JSON.stringify(formDataArray),
                contentType: 'application/json',
                success: function(response){
                    console.log('Данные успешно отправлены на сервер.', response);
                    // Добавьте здесь любую логику обработки успешного ответа сервера
                    $('.thank, #thanks').fadeIn('slow');
                    $('#order form')[0].reset();
                    $('input[type="checkbox"]').prop('disabled', true);
                    $('.modal__time__item').removeClass('modal__time__item_active');
                    
                },
                error: function(error){
                    console.error('Ошибка при отправке данных на сервер.', error);
                    // Добавьте здесь обработку ошибки отправки на сервер
                    $('.errors, #errorses').fadeIn('slow');
                }
            });
        } else {
            console.log('Есть невалидные формы. Пожалуйста, исправьте ошибки.');
        }
    });
     
});



$(document).ready(function() {

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
                weeks: {
                    required: "Выберите день",
                },
                times: {
                    required: "Выберите время",
                },
            }
        });
        return $(form).valid();
    };
      
    $('input[name=phn]').mask("+7 (999) 999-9999");

    $('#checkValidFormFooter').on('click', function(e){
        e.preventDefault();
    });
    
    $('#checkValidFormFooter').on('click', function(){
         
        var forms = $('.modal__footer form');
        var allValid = true;
        var formDataArray = {
            tariff: $('.select-footer').val(),
            name: $('.names-footer').val(),
            phone: $('.phone-footer').val(),
            email: $('.email-footer').val(),
            schedule: [],
            time: []
        };

        // Добавляем выбранные дни недели в массив
        $('.modal__week input[name="weeks"]').each(function() {
            // Проверяем, выбран ли чекбокс
            if ($(this).is(':checked')) {
                // Если выбран, добавляем значение соответствующего дня недели в массив
                var dayOfWeek = $(this).nextAll('input[name="week"]').first().val();
                formDataArray.schedule.push(dayOfWeek);
                
            }
        });
        
        // Добавляем выбранное время в массив
        $('.modal__time input[name="time"]:checked').each(function() {
            if ($(this).is(':checked')) {
                // Если выбран, добавляем значение соответствующего дня недели в массив
                var dayOfTime = $(this).nextAll('.modal__time__item').first().val();
                formDataArray.time.push(dayOfTime);
            }
        });


        forms.each(function(){
            if(!validateForms(this)){
                allValid = false;
            } 
            console.log(JSON.stringify(formDataArray, null, 2));
        });

        if(allValid){
            // Отправка данных на сервер
            $.ajax({
                type: 'POST',
                url: 'http://localhost:7070/requestClient',
                data: JSON.stringify(formDataArray),
                contentType: 'application/json',
                success: function(response){
                    console.log('Данные успешно отправлены на сервер.', response);
                    // Добавьте здесь любую логику обработки успешного ответа сервера
                    $('.thank, #thanks').fadeIn('slow');
                    $('.modal__footer form')[0].reset();
                    $('input[type="checkbox"]').prop('disabled', true);
                    $('.modal__time__item').removeClass('modal__time__item_active');
                    
                },
                error: function(error){
                    console.error('Ошибка при отправке данных на сервер.', error);
                    // Добавьте здесь обработку ошибки отправки на сервер
                    $('.errors, #errorses').fadeIn('slow');
                }
            });
        } else {
            console.log('Есть невалидные формы. Пожалуйста, исправьте ошибки.');
        }
    });
     
});





$(document).ready(function(){
    function validateForm(form){
        $(form).validate({
            rules: {
                title: {
                    required: true,
                },
                price: {
                    required: true,
                },                    
                quantity: {
                    required: true,
                },
                period: {
                    required: true
                },
                duration: {
                    required: true
                },
                type: {
                    required: true
                },
            },
            messages: {
                title: {
                    required: '',
                },
                price: {
                    required: '',
                },                    
                quantity: {
                    required: '',
                },
                period: {
                    required: '',
                },
                duration: {
                    required: '',
                },
                type: {
                    required: '',
                },
            }
        });
        return $(form).valid(); // Возвращаем результат валидации для последующей проверки
    }

    $('.button_request').on('click', function(){
        var forms = $('.panel-box-item__content form');
        var allValid = true;

        forms.each(function(){
            if(!validateForm(this)){
                allValid = false;
            }
        });

        if(allValid){
            // Здесь можно добавить код для отправки форм, если они все прошли валидацию
            console.log('Все формы валидны. Можно отправлять данные.');
        } else {
            console.log('Есть невалидные формы. Пожалуйста, исправьте ошибки.');
        }
    });

    $('.button_request').on('click', function(){
        var forms = $('.panel-box-item__content form');
        var allValid = true;
        var formDataArray = [];

        forms.each(function(){
            if(!validateForm(this)){
                allValid = false;
            } else {
                var formData = $(this).serializeArray();
                var jsonData = {};

                formData.forEach(function(field){
                    jsonData[field.name] = field.value;
                });

                formDataArray.push(jsonData);
            }
            console.log(JSON.stringify(formDataArray, null, 2));
        });

        if(allValid){
            // Отправка данных на сервер
            $.ajax({
                type: 'POST',
                url: 'http://localhost:7070/requestTariffs',
                data: JSON.stringify(formDataArray),
                contentType: 'application/json',
                success: function(response){
                    console.log('Данные успешно отправлены на сервер.', response);
                    // Добавьте здесь любую логику обработки успешного ответа сервера
                    alert('Данные успешно отправлены на сервер');
                },
                error: function(error){
                    console.error('Ошибка при отправке данных на сервер.', error);
                    // Добавьте здесь обработку ошибки отправки на сервер
                }
            });
        } else {
            console.log('Есть невалидные формы. Пожалуйста, исправьте ошибки.');
        }
    });
});





