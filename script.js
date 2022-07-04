

// jquery move image on scroll
$(window).scroll(function() {
    let value = $(this).scrollTop();
    /* $('.cliff img').css({
        'top': value * 0.25 + 'px'
    }); */
    $('.mountains img').css({
        'top': value * 0.5 + 'px'
    });
    $('.stars img').css({
        'top': value * 0.5 + 'px',
        'left': value * 0.5 + 'px'
    });
    $('.moon img').css({
        // rotate
        'transform': 'rotate(' + value * 0.08 + 'deg)',
    });
});