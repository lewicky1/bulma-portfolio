$(document).on('scroll', function () {

    // scroll position
    const scroll = $(this).scrollTop();
    // window height for proper measurments
    const windowHeight = $(window).height();

    // parts of DOM
    const $anim1 = $('.anim1');
    const $anim2 = $('.anim2');
    const $anim3 = $('.anim3');

    // DOM from top
    const anim1fromTop = $anim1.offset().top;
    const anim2fromTop = $anim2.offset().top;
    const anim3fromTop = $anim3.offset().top;

    // objects height
    const anim1Height = $anim1.outerHeight();
    const anim2Height = $anim2.outerHeight();
    const anim3Height = $anim3.outerHeight();

    // showing elements

    if (scroll > anim1fromTop + anim1Height - windowHeight) {
        $anim1.addClass('active');
    }

    if (scroll > anim2fromTop + anim2Height - windowHeight) {
        $anim2.addClass('active');
    }

    if (scroll > anim3fromTop + anim3Height / 8 - windowHeight) {
        $anim3.addClass('active');
    }

    // reset animation

    if (scroll < 100) {
        $('div').removeClass('active');
    }
});

$('figcaption').hover(function () {
    $(this).toggleClass("ndisplay display");
});

$("#b_contact").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
});

$("#b_exp").click(function () {
    $('html, body').animate({
        scrollTop: $("#exp").offset().top
    }, 2000);
});

const hire = document.getElementById('hire');

const svg = document.getElementById('svg');

const text = ["I made pixel perfect layouts with fully responsive Website, animations, and SEO friendly code.","My experience is still growing. I am developing and coding every day.", 
"I do my best to work faster and each day. My code is bug-free. Practice makes the master.", "I am open-minded and friendly. I do not have any problems with contacts both with clients or co-workers. I love to work."];

const img = ["files/images/checklist.svg", "files/images/hiring.svg", "files/images/work.svg", "files/images/conversation.svg"];

let tableElement = 0;

function change() {
    tableElement++;
    if (tableElement == 4) {
        tableElement = 0;
    }
    hire.textContent = text[tableElement];
    svg.src = img[tableElement];
}

setInterval(() => {
   change() 
}, 4085);