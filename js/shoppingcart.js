
// 选中状态
$('.cheall').click(function () {
    // 去除自己的选中状态
    let bool = $(this).prop('checked');
    // console.log(bool);
    // 自己不论为什么状态时单个复选框也和自己一样
    $('.singleche,.cheall').prop('checked', bool)
    // 调用总价
    totalprice()

})
$('.singleche').click(function () {
    // 取出单个复选框的总个数
    let singlecheall = $('.singleche').length;
    // 取出单个复选框的选中的个数
    let singlechesum = $('.singleche:checked').length
    // console.log(singlecheall,singlechesum);
    // 判断 如果总个数等于选中的个数就把全选勾上 否则不勾
    if (singlecheall === singlechesum) {
        $('.cheall').prop('checked', true)
    } else {
        $('.cheall').prop('checked', false)
    }
    // 调用总价
    totalprice()

})

// 小计
function subtotal(obj, num) {
    // 取出单价的值
    let price = $(obj).parents().siblings('.unit-price').html()
    // console.log(price);
    //  得到小计
    let subtotal = num * price
    // console.log(subtotal);
    // 再把得到得小计赋给小计
    $(obj).parents().siblings('.subtotal').html(subtotal.toFixed(2))
}
// 总价 总个数 结算
function totalprice() {
    // 定义一个总价和
    let sum = 0;
    // 定义总个数和
    let sumnum = 0;
    console.log($('.singleche:checked'));
    // 遍历所有得被选中得单个复选框
    $('.singleche:checked').each(function (index, dom) {
        // console.log($('.singleche:checked'));
        // 取出小计的值
        let price = $(dom).parent().siblings("div").find(".subtotal").html()
        console.log("小计的值`:", price);
        // 取出数量的值
        let contsum = $(this).parent().siblings("div").find('.cont').val();
        // 计算总个数和
        sumnum += parseFloat(contsum);
        // 计算总价和
        sum += parseFloat(price);
        // console.log(sum);  

    })
    // 结算
    let bgc=$('.go').css('color')
    console.log(bgc);
    if (sum > 0) {
        $('.go').css({ backgroundColor: ' #ff6600', color: '#ffffff' })
        .prop({disabled:false})
    } else if (sum === 0) {
        $('.go').css({ backgroundColor: ' #f2f2f2', color: 'rgba(16, 16, 16, 0.3)' })
        .prop({disabled:true})
    }
    // 再把总价和赋给总价
    $('.total-prices').html(sum.toFixed(2))
    // 再把总个数和赋给总个数
    $('.totalnum').html(sumnum);
}
// 数量减
$('.subtract').click(function () {
    // 取出数量的值
    let num = $(this).siblings('.cont').val()
    if (num > 1) {
        // 每次点击自减
        --num;
        // 再把新值重新赋给数量
        $(this).siblings('.cont').val(num)
        // console.log(num);
    }
    // 调用小计计算
    subtotal(this, num)
    // 调用总价
    totalprice()

})
// 数量加
$('.plus').click(function () {
    // 取出数量的值
    let num = $(this).siblings('.cont').val()
    if (num < 200) {
        ++num;
        $(this).siblings('.cont').val(num)
    }

    // 调用小计计算
    subtotal(this, num)
    // 调用总价
    totalprice()

})
// 数量输入
$('.cont').keyup(function () {
    let val = $(this).val();
    if (isNaN(val)) {
        $(this).val(1);
        val = 1
    } else if (val > 200) {
        $(this).val(200)
        val = 200;
    }
    subtotal(this, val)
    totalprice()
})
// 删除
$('.delete').click(function () {
    $(this).parent().parent().parent().parent().remove();
})
// 删除选中的商品
$('.chedelete').click(function () {
    $('.singleche:checked').each(function () {
        $(this).parent().parent().remove()
    })
})
// // 结算
// function go(){
//     // // 取出复选框的选中状态
//     // let check=$(this).prop('checked');
//     // if(check){
//     //     $('.go').prop({disabled:false})
//     // }else{
//     //     $('.go').prop({disabled:true})
//     // }
// }
