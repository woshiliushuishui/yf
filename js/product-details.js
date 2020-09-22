
$(function () {
    $("#exzoom").exzoom({
        autoPlay: false,
    });//方法调用，务必在加载完后执行





    
    // 种类选择边框
    $('.type-selection a').click(function () {

        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('span').addClass('cur').parent().siblings('a').find('span').removeClass('cur')
    })
    // 加入购物车
    // 数量加
    $('.plus').click(function () {
        let txt = $(this).siblings('.number').val();
        if (txt < 10) {
            txt++
        } else if (txt >= 10) {
            biejiale1()
        }
        // console.log(txt);
        $('.number').val(txt)
    })
    // 数量减
    $('.subtract').click(function () {
        let txt = $(this).siblings('.number').val();
        if (txt > 1) {
            txt--
            biejiale2()
        }
        // console.log(txt);
        $('.number').val(txt)
    })
    // 数量输入
    $('.number').keyup(function () {
        let txt = $(this).val();
        if (isNaN(txt) || txt === '') {
            txt = 1;

        } else if (txt > 10) {
            txt = 10
            biejiale1()
        } else if (txt < 10) {
            biejiale2()
        }
        $(this).val(txt);
    })
    function biejiale1() {
        $('.biejiale').css({ display: 'block' }).stop().animate({ right: 1060 }, 1000)
    }
    function biejiale2() {
        $('.biejiale').css({ display: 'none' }).animate({ right: 866 }, 20)
    }
})

