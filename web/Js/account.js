var BASE_URL = 'https://'+document.location.host+'/';
function loginBox() {
    jQuery('.book-cover img').css('opacity',0);
    jQuery('.qdlogin-wrap').fadeIn();
    jQuery('.mask').fadeIn();
}

function closeBox() {
    jQuery('.book-cover img').css('opacity',1);
    jQuery('.qdlogin-wrap').fadeOut();
    jQuery('.mask').hide();
}

function submitLog() {
    var url = '/postLogin';
    var data = {
        "_token":jQuery('input[type=hidden][name=_token]').val(),
        "username": jQuery('.q-login input[name=username]').val(),
        "password": jQuery('.q-login input[name=password]').val()
    }
    jQuery('.logging-fade').removeClass('hidden');
    jQuery.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function(data)
        {
            var obj = jQuery.parseJSON(data);
            if(obj.status == 0){
                jQuery('.error-tip').html(obj.message);
                jQuery('.logging-fade').addClass('hidden');
                jQuery('.error-tip').removeClass('hidden');
            }else {
                window.location.reload();
            }
        }
    });
}

function changeLog(el) {
    jQuery('.login-tab .lang').removeClass('act');
    jQuery(el).addClass('act');
    jQuery('.login-tab-wrap .login-box').hide();
    jQuery('.login-tab-wrap .q-'+jQuery(el).attr('data-tab')).fadeIn();
}

function submitReg() {
    var url = BASE_URL+'postRegister';
    var data = {
        "_token":jQuery('input[type=hidden][name=_token]').val(),
        "username": jQuery('.q-reg input[name=username]').val(),
        "email": jQuery('.q-reg input[name=email]').val(),
        "password": jQuery('.q-reg input[name=password]').val(),
        "password_confirmation": jQuery('.q-reg input[name=re-password]').val()
    }
    jQuery('.logging-fade').removeClass('hidden');
    jQuery.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function(data)
        {
            var obj = jQuery.parseJSON(data);
            if(obj.status == 0){
                jQuery('.error-tip').html(obj.message);
                jQuery('.logging-fade').addClass('hidden');
                jQuery('.error-tip').removeClass('hidden');
            }else {
                window.location.reload();
            }
        }
    });
}
