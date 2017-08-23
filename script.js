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

$('.grayscale').click(function() {
  resetPixels();
  activeColor = 'grayscale';
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
      color = randomColor();
      break;
    case 'grayscale':
      color = grayscale(domObject);
      break;

  }
  domObject.css('background', color);
}

function resetPixels() {
  $drawingBoard.children().css('background', '#eee');
}

function randomColor() {
  return "rgb(" + randomNumber(255) + ","
          + randomNumber(255) + ","
          + randomNumber(255) + ")";
}

function grayscale(domObject) {
  var rgbValue = parseInt(domObject.css('background-color').substr(4, 3));
  rgbValue -= 40;
  if (rgbValue < 0 ) {rgbValue = 0}
  return "rgb(" + rgbValue + ","
                + rgbValue + ","
                + rgbValue + ")";
}


function randomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}
