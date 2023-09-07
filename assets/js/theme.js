function checkHeaderPosition() {
    var header = $(".header");
    var scroll = $(window).scrollTop();
    if (scroll >= 0) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}
$(document).ready(function () {
    checkHeaderPosition()
    $(function () {
        $(window).scroll(function () {
            checkHeaderPosition()
        });
    });
    $('.btn-menu').on('click', function () {
        if ($(this).hasClass('active')) {
            $('.header .navs').slideUp();
            $(this).removeClass('active')
        } else {
            $('.header .navs').slideDown();
            $(this).addClass('active')
        }
    })
});