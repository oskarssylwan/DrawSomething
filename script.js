$(document).ready(function(){

  for (var i = 0; i < 18; i++) {
    $('#drawing-area').append("<div class='pixel'></div>");
  }

  $('.pixel').mouseenter(function(){
    $(this).addClass('active');
  });

});
