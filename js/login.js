
$().ready(function () {
    $('#banner .login .login-title li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $('#banner .login .scan-login .scan-login-box').eq(index).addClass('cur').siblings().removeClass('cur')
        console.log($('#banner .login .scan-login').eq(index));
    })
    // 表单验证
     // 在键盘按下并释放及提交后验证提交表单
     $("#signupForm").validate(
        {
            // 验证规则 
            rules: {
                username: {
                    required: true,
                    //自定义的规则
                    myUser: true
                },
                pwd: {
                    required: true,
                    myPwd:true
                    
                },
            },
            //提示信息
            messages: {
                username: {
                    required: "用户名必填",
                },
                pwd: {
                    required: "密码必填",              
                },
               

            }
        }
    )
    jQuery.validator.addMethod("myUser", function (value, element) {
        var tel = /^[A-Za-z0-9_]{4,10}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的用户名");
    //密码     
    jQuery.validator.addMethod("myPwd", function (value, element) {
        var tel =  /^[A-Za-z0-9_]{6,12}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的密码");

    // 表单 用户输入清空
    $('#banner .login .scan-login form>p .user').keyup(function(){
        // alert(1)
        let val=$(this).val();
        console.log(val);
        if(val.length>0){
            $('#banner .login form p span').css({display:'block'});
        }else{
            $('#banner .login form p span').css({display:'none'});
        }
    })
    // 点击x清除内容
    $('#banner .login form p span').click(function(){
        $('#banner .login .scan-login form>p .user').val('');
        $(this).css({display:'none'})
    })
    // 
    $('#banner .login .scan .show').delay(1000).animate({left:80},500);
    $('#banner .login .scan .phone').delay(1000).fadeOut(500).animate({right:100},500);
})