$(function(){
    $('.menu>li>a').mouseenter(function(){
        $('header').stop().animate({'height':220},50);
        $('header').css({'background':'#6DCDEC'});
        $('.left_inner .menu>li>a').css({'color':'#fff'});
        $('.right_inner button svg').css({'fill':'#fff'});
        $('.left_inner h1 a').css({'background':'url(images/logo/logo2.png)'})
        $('.left_inner h1 a').css({'background-size':'cover'})
    });
    $('header').mouseleave(function(){
        $('header').stop().animate({'height':70},10);
        $(this).css({'background':'#fff'})
        $('.left_inner .menu>li>a').css({'color':'#333'});
        $('.right_inner button svg').css({'fill':'#333'});
        $('.left_inner h1 a').css({'background':'url(images/logo/logo.png)'})
        $('.left_inner h1 a').css({'background-size':'cover'})
    });
    $(window).scroll(function(){
        let num = $(document).scrollTop();
        console.log(num);
        if(num < 232){
            
        } else if (num >= 232 && num <= 1362){
            $('.tit_box figure').css({'opacity':1})
            $('.process_list figure').css({'opacity':1})
            $('.tit_box figure').css({'top':num + 245});
            $('.process_list figure').css({'top':num - 610});
        } else {
            $('.tit_box figure').css({'opacity':0})
            $('.process_list figure').css({'opacity':0})
        }
    })
});