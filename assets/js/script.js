// accordions-bar //


$('#aci-1').click(function () {
    $('#aci-1').toggleClass('clickItem')
    $('#p-1').toggleClass('p_bg')
    $('#ac-1 a').toggleClass('clickItemA');
    $('#acc-1').toggleClass(' d_none animate__animated animate__rotateIn')

})
$('#aci-2').click(function () {
    $('#aci-2').toggleClass('clickItem')
    $('#p-2').toggleClass('p_bg')
    $('#ac-2 a').toggleClass('clickItemA');
    $('#acc-2').toggle(500)
})

$('#aci-3').click(function () {
    $('#aci-3').toggleClass('clickItem')
    $('#p-3').toggleClass('p_bg')
    $('#ac-3 a').toggleClass('clickItemA');
    $('#acc-3').toggle(500)
})

$('#aci-4').click(function () {
    $('#aci-4').toggleClass('clickItem')
    $('#p-4').toggleClass('p_bg')
    $('#ac-4 a').toggleClass('clickItemA');
    $('#acc-4').toggle(500)
})
/// sticky header //
let win = $(window)
// let w_out_sticky = $('.w-out')
let _stick = $('.sticky')

// sticky Header js plugin
let w_out_sticky = document.querySelector(".w-out")// target class or id
// hear is  scroll logic
window.addEventListener('scroll', () => {
    // window.scrollY > 300 ? w_out_sticky.classList.add("sticky") : w_out_sticky.classList.remove("sticky")
    // window.scrollY > 300 ? w_out_sticky.classList.toggle('sticky') : " "
    // if (window.scrollY > 300){
    //     w_out_sticky.classList.add('sticky')
    // } else {
    //     w_out_sticky.classList.remove('sticky')
    // }
    // if (window.scrollY > 300){
    //     w_out_sticky.classList.toggle('sticky')
    // }
    w_out_sticky.classList.toggle('sticky', window.scrollY > 300)
})

//  mixitub //
let html_body = $('html,body')
let mixiIt = document.querySelector('.portfolioItems')
let mixer = mixitup(mixiIt);
/// smoth scroll //
// smooth scrolling when clicking an anchor link
$('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 80
            }, 1500);
            return false;
        }

    }
});

let b2t = $('.back_to_top')
// // console.dir(window)
win.scroll(() => win.scrollTop() > 100 ? b2t.fadeIn() : b2t.fadeOut());
b2t.click(() => html_body.animate({scrollTop: 0}, 2500))
// let b2t = document.querySelector('.back_to_top')
// window.addEventListener('scroll', () =>
//         window.scrollY > 100 ? b2t.style.display = 'block':window.scrollY<100 ? b2t.style.display = 'none': false
//
// )
// b2t.addEventListener('click', () => {
//     html_body.animate({
//         scrollTop: 0
//     }, 2500)
// })
//counterup//
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// why slider //
$('.why-slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 2,
    arrows: false,
    vertical: true,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1,
                dots: false
            }
        }
    ]
});
// img_item slider //

$('.img_item').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
$('body').scrollspy({
    target: '.navbar',
    offset: 100


})
/* always close responsive nav after click */
$('.navbar-collapse ul li a').click(() => $('.navbar-toggler:visible').click());
// $('.navbar-collapse a').click(function(){
//     $(".navbar-collapse").collapse('hide');
// });
//preloader//
win.on("load", () => $("#preloader").fadeOut("800"));