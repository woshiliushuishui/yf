$(function(){
    $("#slider").slidebox({
        boxh: 400,//盒子的高度
        w: 1000,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
    $(".exslider").slidebox({
        boxh: 520,//盒子的高度
        w: 1200,//图片的宽度
        h: 520,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });

    // 新书上架-推荐
    $('#newbook .re-book ul li').mouseenter(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
    })
    // 独家提供
    $('.re-title ul li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    // 独家提供选项卡
    $('.re-title ul li').mouseenter(function(){
        let index=$(this).index();
        $('#exclusive-offers .ex-content>div').eq(index).addClass('cur').siblings().removeClass('cur');
    })
    // 猜你喜欢
    // 换一换
    // 定义变量存储下标值
    let index=0;
    // 获取单个ul的高度
    let h=$('#like .likeslider ul').outerHeight(true)
    // 获取个数
    let n=$('#like .likeslider ul').length
    // 克隆第一个ul添加到后面
    $('#like .likeslider .likesliderbox ul').eq(0).clone(true).appendTo('#like .likeslider .likesliderbox');
    // 添加点击事件
    $('#like .re-title p').click(function(){
        // 每点一次index增加一次
        index++;
        // 获取移动的值
        let st=-(index*h);
        
        $('#like .likeslider .likesliderbox').stop(false,true).animate({top:st},200,function(){
            if(index>=n){
                // 当点击的次数等于ul个数时
                index=0;
                // 返回到第一个ul
                $('#like .likeslider .likesliderbox').css({top:index});
            }
        })
        console.log(st,index,n);
    })
})