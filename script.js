$(document).ready(function(){

  $('body').fadeTo('slow', 1);

  for (var i = 0; i < 1250; i++) {
    $('#drawing-area').append("<div class='pixel'></div>");
  }

  $('.pixel').on('mouseenter', function(){
    ChangeColor();
  });

  $('.reset').on('click', function(){
    $('.pixel').removeClass('active');
  });



//--------Events------------




//--------Functions---------
  function ChangeColor(){
    // $(domObject).addClass('.active');
    console.log('is this shit working?');
  };

});
