var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    // relativeInput: true
});

$(".reclam-slider").on("init reInit afterChange", function (event, slick) {
    var sCurr = slick.slickCurrentSlide() <= 8 ? '0' + (slick.slickCurrentSlide() + 1) : slick.slickCurrentSlide() + 1;
    var sCount = slick.slideCount <= 8 ? '0' + slick.slideCount : slick.slideCount;
    $(".reclam__counter").html('<span>' + sCurr + '</span>' + "/" + sCount);
});
$('.reclam-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    appendArrows: $(".reclam-controls"),
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
});

$('.clients-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true
});




$('.dropdown-btn').on('click', function (e) {
    if ($(this).hasClass('active')) { $('.dropdown-btn').removeClass('active').next().slideUp(); }
    else {
        $('.dropdown-btn').removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideToggle();
    }
});