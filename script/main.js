new fullpage('#fullpage',{
	autoScrolling:true,
	scrollHorizontally: true,
    scrollingSpeed: 1000,
    navigation:true,
    navigationPosition:'left',
    anchors:['num0', 'num1', 'num2', 'num3'],
})


let span = document.getElementsByClassName('fp-sr-only');

console.log(span);

span[0].innerHTML = `HOME`
span[1].innerHTML = `PROFILE`
span[2].innerHTML = `WORK`
span[3].innerHTML = `CONTACT`

function section0(){
    anime({
        targets: '.name2 path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        delay: 3000,
        direction: 'alternate',
        loop: false
    });
    setTimeout(function(){
        $('.name1').css({'opacity':1})
    },5001);
    setTimeout(function(){
        $('.name2').css({'opacity':0})
    },5001);
    setTimeout(function(){
        $('.line').css({'width':'calc(50% - 197px)'})
    },2800);
    setTimeout(function(){
        $('.cover').fadeOut(500)
    },2500)
}
section0();


$('#section3 .inner nav ul li').click(function(){
    $(this).addClass('on').siblings().removeClass('on')
    let num = $(this).index();
    $('.main_box div').eq(num).addClass('active').siblings().removeClass('active')
})
// $('.main ul li').mouseenter(function(){
//     $(this).find('p').stop().fadeIn(300).css({'display':'flex'})
// })
// $('.main ul li').mouseleave(function(){
//     $(this).find('p').stop().fadeOut(300)
// })
$('.main_box .cording li').click(function(){
    let cordingnum = $('.main_box .cording li');
    let cnlength = cordingnum.length;
    let num = $(this).index();
    $('.modal_box').stop().fadeIn();
    $('.c_modal').stop().fadeIn();
    $('#fp-nav').fadeOut();
    $('.c_modal ul li').eq(num).show();
    let right = function(){
        if(num<cnlength-1){
            $('.c_modal ul li').eq(num).stop().hide();
            num++;
            $('.c_modal ul li').eq(num).stop().show();
        }else{
            $('.c_modal ul li').eq(num).stop().hide();
            num = 0;
            $('.c_modal ul li').eq(num).stop().show();
        }
    }
    let left = function(){
        if(num>0){
            $('.c_modal ul li').eq(num).stop().hide();
            num--;
            $('.c_modal ul li').eq(num).stop().show();
        }else{
            $('.c_modal ul li').eq(num).stop().hide();
            num = cnlength - 1;
            $('.c_modal ul li').eq(num).stop().show();
        }
    }
    $('.right').click(function(){
        right()
    });
    $('.left').click(function(){
        left()
    });
    $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    console.log('number')
})
$('.main_box .design li').click(function(){
    let designnum = $('.main_box .design li');
    let dnlength = designnum.length;
    let num = $(this).index();
    $('.modal_box').stop().fadeIn();
    $('.d_modal').stop().fadeIn();
    $('#fp-nav').fadeOut();
    $('.d_modal ul li').eq(num).show();
    $('.right').click(function(){
        if(num<dnlength-1){
            $('.d_modal ul li').eq(num).stop().hide();
            num++;
            $('.d_modal ul li').eq(num).stop().show();
        }else{
            $('.d_modal ul li').eq(num).stop().hide();
            num = 0;
            $('.d_modal ul li').eq(num).stop().show();
        }
    })
    $('.left').click(function(){
        if(num>0){
            $('.d_modal ul li').eq(num).stop().hide();
            num--;
            $('.d_modal ul li').eq(num).stop().show();
        }else{
            $('.d_modal ul li').eq(num).stop().hide();
            num = dnlength - 1;
            $('.d_modal ul li').eq(num).stop().show();
        }
    })
    $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
})
$('.close').click(function(){
    $('.modal_box').stop().fadeOut(); 
    $('.modal').fadeOut();
    $('.modal ul li').fadeOut();
    $('#fp-nav').fadeIn();
    $('body').off('scroll touchmove mousewheel');
})
$(function(){
    $('.jp .link1 a').click(function(){
        window.open("https://ldmdaimon.cafe24.com/portfolio/jeep/index.html",'_blank')
    })
    $('.sw .link1 a').click(function(){
        window.open("https://ldmdaimon.cafe24.com/portfolio/subway/42_mobile(subway)/index.html",'_blank',' width=560, height=800')
    })
    $('.dr .link1 a').click(function(){
        window.open("https://ldmdaimon.cafe24.com/portfolio/26_derim/index.html",'_blank')
    })
    $('.dr .link2 a').click(function(){
        window.open("https://ldmdaimon.cafe24.com/portfolio/26_derim/ceo.html",'_blank')
    })
    $('.bj .link1 a').click(function(){
        window.open("https://glassdum.github.io/making/making_with_ys/",'_blank')
    })
    $('.bj .link2 a').click(function(){
        window.open("https://glassdum.github.io/making/making_with_ys/product_detail.html",'_blank')
    })
    $('.bj .link3 a').click(function(){
        window.open("https://glassdum.github.io/making/making_with_ys/process.html",'_blank')
    })
    $('.wth p a').click(function(){
        window.open("https://glassdum.github.io/making/weather_api/", "_blank");
    })
    $('.lm p a').click(function(){
        window.open("https://glassdum.github.io/making/08_lafuma/index.html",'_blank')
    })
    $('.tdl p a').click(function(){
        window.open("https://glassdum.github.io/making/todo_list/",'_blank')
    })
    $('.lc .link1 a').click(function(){
        window.open("./images/explain/ui,ux/lottecinema/pc.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.lc .link2 a').click(function(){
        window.open("./images/explain/ui,ux/lottecinema/tablet.jpg",'_blank','menubar=no, toolbar=no, width=767, height=1000')
    })
    $('.lc .link3 a').click(function(){
        window.open("./images/explain/ui,ux/lottecinema/mobile.jpg",'_blank','menubar=no, toolbar=no, width=375, height=1000')
    })
    $('.pi_dwm .link1 a').click(function(){
        window.open("./images/explain/photo,illust/dancewithme/mockup_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_dwm .link2 a').click(function(){
        window.open("./images/explain/photo,illust/dancewithme/dancewithme.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_oe .link1 a').click(function(){
        window.open("./images/explain/photo,illust/ooahChecklist/mockup_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_oe .link2 a').click(function(){
        window.open("./images/explain/photo,illust/ooahChecklist/ooahChecklist.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_di .link1 a').click(function(){
        window.open("./images/explain/photo,illust/textdesign/mockup_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_di .link2 a').click(function(){
        window.open("./images/explain/photo,illust/textdesign/textdesign.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.sb .link1 a').click(function(){
        window.open("./images/explain/photo,illust/starbucks/mockup_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.sb .link2 a').click(function(){
        window.open("./images/explain/photo,illust/starbucks/star.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_dc .link1 a').click(function(){
        window.open("./images/explain/photo,illust/develop_curiosity/mockup_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_dc .link2 a').click(function(){
        window.open("./images/explain/photo,illust/develop_curiosity/develop_curiosity.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_vg .link1 a').click(function(){
        window.open("./images/explain/photo,illust/vege/mockup_origin.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.pi_vg .link2 a').click(function(){
        window.open("./images/explain/photo,illust/vege/vegetable.jpg",'_blank','menubar=no, toolbar=no, width=1000, height=1000')
    })
    $('.kw .link1 a').click(function(){
        window.open("https://www.figma.com/proto/WgsqVbtYLmWt5L3a8cON9w/%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%9B%B9%ED%88%B0?type=design&node-id=21-1431&t=9dzKPuMwXo0URExq-1&scaling=scale-down&page-id=21%3A1272&starting-point-node-id=21%3A15181&show-proto-sidebar=1&mode=design",'_blank','menubar=no, toolbar=no, width=1200, height=900')
    })
})