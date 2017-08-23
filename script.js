// --------- VARIABLES ---------
$drawingBoard = $('#drawing-area');
defaultColor = '#42ebf4';
activeColor = defaultColor;

// --------- PROGRAM -----------

$('body').fadeTo('slow',1);
buildDrawingBoard();

// --------- EVENTS -------------

$('.pixel').mouseenter(function() {
  addColor($(this), activeColor);
})

$('.reset').click(function() {
  resetPixels();
});

$('.random').click(function() {
  resetPixels();
  activeColor = 'random';
});

$('.default').click(function() {
  resetPixels();
  activeColor = defaultColor;
});

// --------- FUNCTIONS ----------


function buildDrawingBoard() {
  for (var i = 0; i < 1250; i++) {
    $drawingBoard.append("<div class='pixel'></div>");
  }
}

function addColor(domObject, color) {
  switch (color) {
    case 'random':
      domObject.css('background', randomColor());
      break;
    default:
      domObject.css('background', color);
  }
}

function resetPixels() {
  $drawingBoard.children().css('background', '#eee');
}

function randomColor() {
  return "rgb(" + randomNumber(255) + ","
          + randomNumber(255) + ","
          + randomNumber(255) + ")";
}

function randomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}
