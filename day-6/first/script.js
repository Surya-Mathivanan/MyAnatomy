alert("hii everyone")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function ChangeColor() {
    document.getElementById("para").style.color = getRandomColor();
}

function changeText() {
    document.getElementById("hovertext").innerHTML = "You hovered over me!";
}

function changeText(){
    document.getElementById("textchange").innerHTML = "You hovered over me!";
}