import $ from 'jquery'

$(document).ready(function() {
    console.log("ASD");
    $('#auth-login').click(function () {
        if($(this)[0].classList.contains('auth-current-section'))
            return;
        $('#auth-login').addClass('auth-current-section');
        $('#auth-reg').removeClass('auth-current-section');
        $('.display-on-reg').fadeOut(200, function(){
            $('.display-on-login').fadeIn(200);
        });
    });

    $('#auth-reg').click(function () {
        if($(this)[0].classList.contains('auth-current-section'))
            return;
        $('#auth-reg').addClass('auth-current-section');
        $('#auth-login').removeClass('auth-current-section');
        $('.display-on-login').fadeOut(200, function(){
            $('.display-on-reg').fadeIn(200);
        });
    });
});