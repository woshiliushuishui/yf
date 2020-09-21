$().ready(function(){
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
                repwd:{
                    required: true,
                    rePwd: true
                },
                myphnoe:{
                    required: true,
                    myPhnoe:true
                },
                yanzhengma:{
                    required: true,
                    yanZhengma:true
                },
                phnoeyzm:{
                    required: true,
                    phnoeYzm:true
                }
            },
            //提示信息
            messages: {
                username: {
                    required: "用户名必填",
                },
                pwd: {
                    required: "密码必填",              
                },
                repwd:{
                    required:'确认密码'
                },
                myphnoe:{
                    required:'号码必填'
                },
                yanzhengma:{
                    required:'验证码必填'
                },
                phnoeyzm:{
                    required:'手机验证码必填'
                }
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
    jQuery.validator.addMethod("rePwd", function (value, element) {
        var tel =  /^[A-Za-z0-9_]{6,12}$/;
        return this.optional(element) || (tel.test(value));
    }, "请确认密码");
    jQuery.validator.addMethod("myPhnoe", function (value, element) {
        var tel =  /^[0-9_]{11}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的号码");
    jQuery.validator.addMethod("yanZhengma", function (value, element) {
        var tel =  /^[A-Z0-9_]{0,4}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的验证码");
    jQuery.validator.addMethod("phnoeYzm", function (value, element) {
        var tel =  /^[0-9_]{0,4}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的手机验证码");








})