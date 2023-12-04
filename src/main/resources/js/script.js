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


    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()){
            return;
        };

        $.ajax({
            type: "POST",
            url: "../index.html",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });


});

function sendJSON() {
    // с помощью jQuery обращаемся к элементам на странице по их именам
    let name = document.querySelector('#name');
    let lastname = document.querySelector('#lastname');
    // а вот сюда мы поместим ответ от сервера
    let result = document.querySelector('.result');
    // создаём новый экземпляр запроса XHR
    let xhr = new XMLHttpRequest();
    // адрес, куда мы отправим нашу JSON-строку
    let url = "http://mihailmaximov.ru/projects/json/json.php";
    // открываем соединение
    xhr.open("POST", url, true);
    // устанавливаем заголовок — выбираем тип контента, который отправится на сервер, в нашем случае мы явно пишем, что это JSON
    xhr.setRequestHeader("Content-Type", "application/json");
    // когда придёт ответ на наше обращение к серверу, мы его обработаем здесь
    xhr.onreadystatechange = function () {
      // если запрос принят и сервер ответил, что всё в порядке
      if (xhr.readyState === 4 && xhr.status === 200) {
        // выводим то, что ответил нам сервер — так мы убедимся, что данные он получил правильно
        result.innerHTML = this.responseText;
      }
    };
    // преобразуем наши данные JSON в строку
    var data = JSON.stringify({ "name": name.value, "lastname": lastname.value });
    // когда всё готово, отправляем JSON на сервер
    xhr.send(data);
  }



