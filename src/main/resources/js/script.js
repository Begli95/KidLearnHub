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
    };


    function validateFormer(form){
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
    };

    validateForms('#order form');
    validateFormer('.modal__footer form');
 
    $('input[name=phn]').mask("+7 (999) 999-9999");



    $('#check').on('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
        validateForms('#order form');
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
            url: 'http://localhost:7070/requestClient', // Замени это на свой URL
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
            // ваш AJAX запрос и отправка данных на сервер остаются теми же
    });

    $('#check').on('click', function() {
        // При клике на кнопку #check запускаем валидацию
        var formsValid = true; // Переменная для отслеживания валидности всех форм

        validateForms('#order form');
        

        // Проверяем, прошли ли все формы валидацию
        $('.panel-box-item__content form').each(function() {
            if (!$(this).valid()) {
                formsValid = false;
                return false; // Прерываем цикл, если хотя бы одна форма невалидна
            }
        });

        if (formsValid) {
            // Если все формы валидны, отправляем данные на сервер
            $('.result').trigger('click');
        } else {
            // Если есть невалидные формы, показываем сообщение об ошибке
            $('.errors, #errorses').fadeIn('slow');
        }
    });




    $('#sending-check').on('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
        validateFormer('.modal__footer form');
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
            url: 'http://localhost:7070/requestClient', // Замени это на свой URL
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
            // ваш AJAX запрос и отправка данных на сервер остаются теми же
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





