//1.Tie into the keyup evnet listener
//2. Display the keycode of the key pressed
// onkeyup is bulitin event listener

/*let keyCodePressed;
document.onkeyup = function (event) {
   const keyCodePressed = event.keyCode;
   document.getElementById('message').innerHTML = keyCodePressed;
   //console.log(keyCodePressed);

   if (keyCodePressed === 13) {
   // generating number is generating random between 0,100
   //    let random = Math.random() * 100);
         console.log(Math.random() * 100);
      } else if (keyCodePressed === 16) {
         console.log(Math.floor(Math.random() * 100));
      } else if (keyCodePressed === 18) {
         console.log(Math.ceil(Math.random() * 100));
      }
    
      }
*/

// Floor=round down, ceil= roiund up
//Window Width and Height
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
      document.getElementById('message').innerHTML = keyCodePressed + '<br>' + coordinates;
      //Figure out how to append a div with a message into the coordinateWrapper
      coordinateWarapper.appendChild('<div>APPENDED</div>')
   }

}

/*
const x = window.innerWidth;
const y = window.innerHeight;
document.getElementById('message').innerHTML = "Width: " + x + "<br>Height: " + y;
*/