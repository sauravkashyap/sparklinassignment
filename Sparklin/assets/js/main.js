// $('.slider_wrapper').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: true,
//     nextArrow: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });

$('.slider_wrapper').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0'
});

$(".switch_wrapper input").click(function() {
    $(".sidebar").toggle('fast');
    $(".sidebar_toggler").show();
    $('.switch_wrapper').removeClass('transfrom');
    $('.middle_section_wrapper').addClass('wider');

});

$('.sidebar_toggler').click(function() {
    $('.sidebar').toggle('slow');
    $('.sidebar_toggler').hide();
    $('.switch_wrapper').addClass('transfrom');
    $('.middle_section_wrapper').removeClass('wider');
});