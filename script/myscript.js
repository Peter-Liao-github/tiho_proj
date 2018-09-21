$(window).scroll(function(){
    if($(window).scrollTop()>80){
        $('.ingredient img').animate({opacity: 0},700)
    }

    if ($(window).scrollTop()>900) {
        $('#opening-word').css({animation: 'fInOut 2.5s 0s 1 both'})
    }

    // switch ($(window).scrollTop()) {
    //     case 80:
    //         $('.large-img img:nth-child(1)').animate({opacity: 0},700)
    //         

    //     case 700:
    //         $('#opening-word').css('opacity',0)
    //         break;
            
    //     default:
    //         break;
    // }
})

$(function(){
    $('.block-top').parallax('50%',0.8);
    $('.video-opening img').parallax('50%',0.3);
    $('#opening-word').parallax('50%',0.1);

    // if ($(window).scrollTop()==700) {
    //     $('#opening-word').css('opacity',0)
    // }
})
