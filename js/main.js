$(document).ready(function () {
  let owl = $(".owl-carousel").owlCarousel({
    //configurationları bunlar
    autoplay: false,
    dots: true,
    dotsData: true,
    loop: true,
    nav: false,
    items: 1,
  });

  /*tıklandıgında  1 2 3 değişssin*/
  $(".owl-dot").click(function () {
    owl.trigger("to.owl.carousel", [$(this).index(), 1000]);
  });
});

/**OPen-Close menu*/

$("#check").change(function () {
  if ($(this).is(":checked")) {
    $(".nav-header").addClass("active");
  } else {
    $(".nav-header").removeClass("active");
  }
});
