$(document).ready(function(){

  $('body').fadeTo('slow', 1);

  for (var i = 0; i < 1250; i++) {
    $('#drawing-area').append("<div class='pixel'></div>");
  }

  $('.pixel').mouseenter(function(){
    $(this).addClass('active');
  });

  $('.reset').on('click', function(){
    $('.pixel').removeClass('active');
  });



});
