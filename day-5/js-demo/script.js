document.getElementById("demo").style.color = "red";
function getRandomColor() {
  var letters = "0123456789ABCDEF";

  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getNewCard() {
  var card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = getRandomColor();
  card.style.color = getRandomColor();
  card.style.fontFamily = getRandomFontStyles();
  card.innerHTML = "This is a new card!";
  document.body.appendChild(card);
}

function getRandomFontStyles() {
  var fontStyles = [
    "Arial",
    "Verdana",
    "Helvetica",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New",
    "Lucida Console",
    "Palatino Linotype",
    "Segoe UI",
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Poppins",
    "Raleway",
    "Ubuntu",
    "Comic Sans MS",
  ];
  return fontStyles[Math.floor(Math.random() * fontStyles.length)];
}

function changecolor() {
  document.getElementById("demo").style.color = getRandomColor();
  document.getElementById("demo").style.fontFamily = getRandomFontStyles();
  document.getElementById("demo").innerHTML= getNewCard();
}
