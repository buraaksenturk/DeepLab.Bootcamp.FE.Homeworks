$(function () {
    const windowSize = $(window).width();

    if (windowSize < 1200) {
        $('#navbar').hide();
    } else {
        $('#navbar').show();
    }

    $(window).resize(function () {
        const newWindowSize = $(window).width();

        if (newWindowSize < 1200) {
            $('#navbar').addClass('d-none');
        } else {
            console.log(newWindowSize);
            $('#navbar').removeClass('d-none').addClass('d-xl-flex');
        }
    });
    $('.collapse-button').click(function (){
        $('#navbar').removeClass('d-none').addClass('d-flex');
    });
    $('.close-button').click(function (){
        $('#navbar').addClass('d-none').removeClass('d-flex');
    });
});
