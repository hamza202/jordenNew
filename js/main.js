
//start wow js
// new WOW().init();
$(".add-rate .internalPage-body ul.m-0 li").click(function(){
    $(this).addClass('checked').siblings().removeClass('checked');
});

$(document).ready(function() {
    $('.select3').niceSelect();
});
//check all
$(".select_all").change(function(){  //"select all" change
    $(".checkbox").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
});

//".checkbox" change
$('.checkbox').change(function(){
    //uncheck "select all", if one of the listed checkbox item is unchecked
    if(false == $(this).prop("checked")){ //if this item is unchecked
        $("#select_all").prop('checked', false); //change "select all" checked status to false
    }
    //check "select all" if all checkbox items are checked
    if ($('.checkbox:checked').length == $('.checkbox').length ){
        $("#select_all").prop('checked', true);
    }
});

$(document).ready(function () {
    $("#watch-me").click(function () {
        $("#show-me:hidden").show('normal');
    });
    $("#watch-me").click(function () {
        if ($('#hide-me').prop('checked') === true) {
            $('#show-me').hide();
        }
    });
    $(".reset").click(function () {
        $('#show-me').hide();
    });

    $("#hide-me").click(function()
    {
        $("#show-me").hide();
    });

});

$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            'test[]': {
                maxlength: 5
            }
        },
        messages: {
            'test[]': {
                maxlength: function (form) { // for demo
                    alert('اختر 5 تقيمات كحد اقصى'); // for demo
                    return false; // for demo
                }
            }
        }
    });

});

$('#red-more-1').readmore({
    speed: 1000,
    moreLink: '<a href="#">اعرض المزيد <i class="fa fa-angle-down" aria-hidden="true"></i></a>',
    lessLink: '<a href="#">أقل <i class="fa fa-angle-up" aria-hidden="true"></i></a>',
    collapsedHeight: 418
});
// $('#red-more-2').readmore({speed: 500});

//start fixed nav
$(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.nav-bar');
        if ($(window).scrollTop() >= 200) {
            navbar.addClass('scrolled');
            navbar.addClass('navbar-fixed-top');
        } else {
            navbar.removeClass('scrolled');
            navbar.removeClass('navbar-fixed-top');
        }
    });

});



//start mexitup

$(document).ready(function(){
    "use strict";

    $(window).scroll(function(){
        if ($(this).scrollTop() >= 600) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }

    });
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});
// $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();
//     $('section').each(function(i) {
//         if ($(this).position().top <= scrollDistance -100) {
//             $('.navbar-nav a.active').removeClass('active');
//             $('.navbar-nav a').eq(i).addClass('active');
//         }
//     });
// }).scroll();

//back to top
$('#back-to-top').tooltip('show');
$(".gear-check").click(function()
{
    $(".color-option").fadeToggle();
});


//
// $('.nav a').on('click', function(){
//     $('.navbar-toggle').click() //bootstrap 3.x by Richard
// });


// $(window).on('load', function() { // makes sure the whole site is loaded
//   $('#status').fadeOut(); // will first fade out the loading animation
//   $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
//   $('body').delay(350).css({'overflow':'visible'});
// })


$(document).ready(function() {
    $("#word_count").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 50) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 50).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(50-words);
        }
    });
 });

$(document).ready(function() {
    $("#word_count_g").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 50) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 50).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count_g').text(words);
            $('#word_left_g').text(50-words);
        }
    });
});

$(document).ready(function() {
    $("#school-map").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 20) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 20).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(20-words);
        }
    });
 }); 