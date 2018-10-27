let keyCodePressed;
let coordinateWarapper = document.getElementById('coordinates');

document.onkeyup = function (event) {
      const keyCodePressed = event.keyCode;
      document.getElementById('message').innerHTML = keyCodePressed;
      //console.log(keyCodePressed);
      if (keyCodePressed === 13) {
            //Generate random between 0 and whatever Math.random is multiplied
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            console.log(x, y);
            const coordinates = 'Width: ' + x + '<br>Height: ' + y;
            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + 'Enter';
            document.getElementById('message').style.backgroundColor = "#B7D968";
      } else if (keyCodePressed === 37) {
            const x = window.innerWidth;
            const y = window.innerHeight;
            console.log(x, y);
            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + 'Arrow Left';
            document.getElementById('message').style.backgroundColor = "#B576AD";
      } else if (keyCodePressed === 38) {
            const x = window.innerWidth;
            const y = window.innerHeight;
            console.log(x, y);
            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + 'Arrow Up';
            document.getElementById('message').style.backgroundColor = "#E04644";
      } else if (keyCodePressed === 39) {
            const x = window.innerWidth;
            const y = window.innerHeight;
            console.log(x, y);
            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + 'Arrow Right';
            document.getElementById('message').style.backgroundColor = "#FDE47F";
      } else if (keyCodePressed === 40) {
            const x = window.innerWidth;
            const y = window.innerHeight;
            console.log(x, y);
            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + 'Arrow Down';
            document.getElementById('message').style.backgroundColor = "#7CCCE5";
      }
}



/*void setup(){ size(400, 300); }


function changeColorWhenEnter(e) {
  if (e.keyCode == 13) {
    changeColor();
  }
}
function changeColor(){
  var color = document.getElementById("color").value;
  document.body.style.background = color;
}





if (document.getElementById('w1').style.backgroundColor == "#ECECF4") {
        alert("Yes")
void draw() {
      background(0);
      textSize(25);
      if (keyCode == DOWN) {
            fill(255, 0, 0);
            text("DOWN", 150, 150);
      } else if (keyCode == UP) {
            fill(0, 0, 255);
            text("UP", 150, 150);
      } else if (keyCode == RIGHT) {
            fill(0, 255, 0);
            text("RIGHT", 150, 150);
      } else if (keyCode == LEFT) {
            fill(255, 255, 0);
            text("LEFT", 150, 150);
      } else if (keyCode == ALT) {
            fill(0, 255, 255);
            text("ALT", 150, 150);
      } else if (keyCode == CONTROL) {
            fill(255, 0, 255);
            text("CONTROL", 150, 150);
      } else if (keyCode == SHIFT) {
            fill(127, 127, 127);
            text("SHIFT", 150, 150);
      }
      ellipse(100, 100, 100, 100);
      fill(255);
      text("Test Keys:", 50, 200);
      text("UP, DOWN, LEFT, RIGHT", 50, 230);
      text("ALT, CONTROL, SHIFT", 50, 260);
      textSize(10);
      text("UP, DOWN, LEFT, RIGHT represent arrow keys.", 50, 280);
};*/