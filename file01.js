

$(".menuLogo").on('click', function() {
  let value = $(".globalNav").hasClass("globalNavActive");

  if (value == true){
  $(".globalNav").removeClass("globalNavActive");
} else {
  $(".globalNav").addClass("globalNavActive");
}
});
