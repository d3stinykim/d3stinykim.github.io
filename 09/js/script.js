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
      } else {
            document.getElementById('message').style.backgroundColor = "#454545";
      }
}