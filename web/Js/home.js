var BASE_URL = 'https://'+document.location.host+'/';
jQuery(document).ready(function () {
    BASE_URL = 'https://'+document.location.host+'/';
    var carousel = jQuery("#carousel").waterwheelCarousel({
        flankingItems: 4,
        movingToCenter: function ($item) {
            //alert('a');
         //   var id = jQuery('.slides .carousel-center').attr('id');


        },
        movedToCenter: function ($item) {
            var id = jQuery('.slides .carousel-center').attr('id');
           // console.log(id);
            jQuery('.description .desc-wrap').hide();
            jQuery('.description .desc-wrap.'+id).fadeIn();
            jQuery('.buttonNav .bullet').removeClass('bulletActive');
            jQuery('.buttonNav .bullet.bullet-'+id).addClass('bulletActive');
        },
        movingFromCenter: function ($item) {
            // jQuery('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        },
        movedFromCenter: function ($item) {
            // jQuery('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
            // jQuery('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        }
    });

    jQuery('.prevButton').bind('click', function () {
        carousel.prev();
        return false
    });

    jQuery('.nextButton').bind('click', function () {
        carousel.next();
        return false;
    });

    jQuery('.buttonNav .bullet').bind('click', function () {
        var active = parseInt(jQuery('.buttonNav .bullet.bulletActive').attr('data-number'));
        var goto =   parseInt(jQuery(this).attr('data-number'));
        var range = Math.abs(goto - active);
        if(goto > active){
            carousel.nextTo(range);
        }else if(goto < active){
            carousel.prevTo(range);
        }
    });

});
jQuery(function() {
    //autocomplete
    jQuery("#inset-autocomplete-input").autocomplete({
        source: BASE_URL + 'tim-kiem',
        minLength: 1,
       // autoFocus: true,
        select: function (event, ui){
            console.log(ui.item);
            if(ui.item.type == 'story'){
                if(ui.item.story_type == '1'){
                    window.location.href = 'https://ngontinh.tangthuvien.vn/doc-truyen/'+ ui.item.url;
                }else {
                    window.location.href = BASE_URL+'doc-truyen/'+ ui.item.url;
                }

            }else if(ui.item.type == 'author'){
                window.location.href = BASE_URL+'tac-gia?author='+ ui.item.id;
            }
        }
    }).keypress(function(e){
        if (e.keyCode === 13){
            event.preventDefault();
            window.location.href = BASE_URL+'ket-qua-tim-kiem?term='+jQuery("#inset-autocomplete-input").val();
        }
    }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
        if(item.type == 'story'){
            if(item.story_type == '1'){
                return jQuery( "<li></li>" ).data( "ui-autocomplete-item", item ).append( "<a href='https://ngontinh.tangthuvien.vn/doc-truyen/"+ item.url+"'>" + item.name + "</a>" ).appendTo( ul );
            }else {
                return jQuery( "<li></li>" ).data( "ui-autocomplete-item", item ).append( "<a href='https://truyen.tangthuvien.vn/doc-truyen/"+ item.url+"'>" + item.name + "</a>" ).appendTo( ul );
            }

        }
        if(item.type == 'author'){
            return jQuery( "<li></li>" ).data( "ui-autocomplete-item", item ).append( "<a href='https://truyen.tangthuvien.vn/tac-gia?author="+ item.id+"'>" + item.name + "</a>" ).appendTo( ul );
        }
        // if(item.type == 'converter'){
        //     return jQuery( "<li></li>" ).data( "ui-autocomplete-item", item ).append( "<a href='https://truyen.tangthuvien.vn/converter/"+ item.url+"'>" + item.name + "</a>" ).appendTo( ul );
        // }
        // For now which just want to show the person.given_name in the list.
    };
});
function goTo(id) {
    jQuery('html, body').animate({
        scrollTop: jQuery("#"+id).offset().top-20
    }, 1000);
}