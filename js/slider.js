// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
$(document).ready(main);

var contador = 1;

function main(){
    $('.menu_bar').click(function(){
        //$('nav').toggle();

        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador =0;
        }else {
            contador =1;
            $('nav').animate({
                left: '-100%'
            });
        }

    });

};