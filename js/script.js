$(document).ready(function(){
  $('#portfolio_top').click(function(){
    $('html, body').animate({scrollTop: $('#portfolio').offset().top}, 1000);
  })
});
