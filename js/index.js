//文档加载事件
$(function () {
    $("#slider").slidebox({
        boxh: 420,//盒子的高度
        w: 1000,//图片的宽度
        h: 420,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
})
$(function () {
    $(".box").slidebox({
        boxh: 219,//盒子的高度
        w: 327,//图片的宽度
        h: 219,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
})
$(function () {
    $(".boxcloth").slidebox({
        boxh: 338,//盒子的高度
        w: 425,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
})
// 二级菜单
$('#banner>.menulist>ul>li').mouseenter(function () {
    $(this).find('p').css({ width: 180, backgroundColor: '#ffffff', borderColor: '#f60', borderRight: 0 })
    $(this).find('div').css({ display: 'block' })
}).mouseleave(function () {
    $(this).find('p').css({ borderColor: 'transparent', width: 179, borderRight: 1, backgroundColor: '#f3f3f3' })
    $(this).find('div').css({ display: 'none' })
})
// 电子书选项卡
$('#ebook .l-ebook .re-title .tab-control p').mouseenter(function () {
    // 给自己添加active类名然后咋把其他p上的active删除
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $('#ebook .l-ebook .r-slider-content').eq(index).addClass('cur').siblings().removeClass('cur')
})
// 新书畅销榜
$('#ebook .newbook ul li').mouseenter(function () {
    // 自己的div显示出来
    $(this).find('div').show();
    // 隐藏自己的标题
    $(this).find('h2').hide();
    // 把其他的div都隐藏
    $(this).siblings().find('div').hide();
    // 把其他的标题显示出来
    $(this).siblings().find('h2').show();
})
// 服装选项卡
$('#cloth .l-cloth .re-title .tab-control li').mouseenter(function () {
    // 给自己添加active类名然后咋把其他li上的active删除
    $(this).addClass('active').siblings().removeClass('active');
    // 获取自己的下标
    let index = $(this).index();
    // 找到相对应的ul下标
    $('#cloth .l-cloth .r-content').eq(index).addClass('cur').siblings().removeClass('cur');
    console.log($('#cloth .l-cloth .r-content'));
});
// 运动选项卡
$('#sport .l-cloth .re-title .tab-control li').mouseenter(function () {
    // 给自己添加active类名然后咋把其他li上的active删除
    $(this).addClass('active').siblings().removeClass('active');
    // 获取自己的下标
    let index = $(this).index();
    // 找到相对应的ul下标
    $('#sport .l-cloth .r-content').eq(index).addClass('cur').siblings().removeClass('cur');
});
// 童装选项卡
$('#childcloth .l-cloth .re-title .tab-control li').mouseenter(function () {
    // 给自己添加active类名然后咋把其他li上的active删除
    $(this).addClass('active').siblings().removeClass('active');
    // 获取自己的下标
    let index = $(this).index();
    // 找到相对应的ul下标
    $('#childcloth .l-cloth .r-content').eq(index).addClass('cur').siblings().removeClass('cur');
});
// 推广商品轮播
// 推广商品鼠标移入
let bgc = '';
$('#spread .promption li').mouseenter(function () {
    $(this).css({ backgroundColor: '#f2f2f2' });
    let bgc = $(this).css('backgroundColor');
}).mouseleave(function () {
    $(this).css({ backgroundColor: bgc })
});
// 推广产品

$('#spread .re-title .btn p').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $('#spread .promption').eq(index).addClass('cur').siblings().removeClass('cur');
});
// 回到顶部
$('.back').click(function () {
    // alert(1)
    $('html').animate({ scrollTop: 0 }, 500)
    // return false;
})
// 楼层
// 图书
$('.floor div').click(function () {
    let index = $(this).index();
    // $('.floor').eq(index).offset().top
    $('html,body').stop().animate({ scrollTop: $('.floorr').eq(index).offset().top }, 500)
}).hover(function () {
    $(this).css({ backgroundColor: $(this).attr('bgc'), backgroundPositionX: -40, width: 40 })
}, function () {
    $(this).css({ backgroundColor: '', backgroundPositionX: 0, width: 0 })
})

$('.ticket').hover(function () {
    $('.welfare ul li .erweima').stop().animate({ right: 140 }, 500)
}, function () {
    $('.welfare ul li .erweima').stop().animate({ right: 0 }, 500)
});

// 领卷中心
let Stop = $('html,body').scrollTop();
let inittop = parseInt(($(window).height() - $('.welfare').height()) / 3.5);
$('.welfare').css({ top: inittop + Stop })
$(window).scroll(function () {
    // let Stop = $('html').scrollTop();
    // // console.log(top);
    // let inittop = parseInt(($(window).height() - $('.welfare').height()) / 2);
    // // console.log(inittop);
    // $('.welfare').stop().animate({ top: inittop + Stop }, 100)
    setinitsize()
})
$(window).resize(function () {

    // let Stop = $('html').scrollTop();
    // let inittop = parseInt(($(window).height() - $('.welfare').height()) / 2);
    // $('.welfare').stop().animate({ top: inittop + Stop }, 100)
    setinitsize()
})

function setinitsize() {
    let Stop = $('html').scrollTop();
    let inittop = parseInt(($(window).height() - $('.welfare').height()) / 3.5);
    $('.welfare').stop().animate({ top: inittop + Stop }, 100)
}
// 顶部滑动
settopslide()
function settopslide() {
    if (Stop >= 500) {
        $('#topslide').stop().fadeIn();
        $('header .topsearch form').appendTo('#topslide')
    } else {
        $('#topslide').stop().fadeOut();
        $('#topslide form').appendTo('header .topsearch')
    }
}

$(window).scroll(function () {
    Stop = $('html,body').scrollTop();
    settopslide()
})


