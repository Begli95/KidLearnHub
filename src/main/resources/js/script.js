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

    function toggleSlider(items) {
        $(items).each(function() {
            $(this).on('click', function() {
                $('.description').toggleClass('description_active');
                $('.description__sun').toggleClass('description__sun_active');
                $('.description__moon').toggleClass('description__moon_active');
                $('.description__title').toggleClass('description__night-color');
                $('.description__subtitle').toggleClass('description__night-color');
                $('.description__txt').toggleClass('description__night-color');
                $('.description__txt__elem').toggleClass('description__night-color');
                
                
            });
        });
    };

    toggleSlider('.description__sun')
    toggleSlider('.description__moon')


    $('.btn__header').on('click',function() {
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