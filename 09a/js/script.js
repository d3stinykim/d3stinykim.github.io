let keyCodePressed;
let coordinateWarapper = document.getElementById('coordinates');

document.onkeyup = function (event) {
      const keyCodePressed = event.keyCode;
      document.getElementById('message').innerHTML = keyCodePressed;

      if (keyCodePressed === 13) {
            //Generate random between 0 and whatever Math.random is multiplied
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            console.log(x, y);
            const coordinates = 'Width: ' + x + '<br>Height: ' + y;
            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Enter ]' + '<br>' + coordinates;
            document.body.style.backgroundColor = "#B7D968";
      } else if (keyCodePressed === 37) {
            const getPhrase = function () {
                  const exclamations = ['✮ Hello ✮ '];
                  const index = Math.floor(Math.random() * exclamations.length);
                  return exclamations[index];
            }

            const getPhrase2 = function () {
                  const exclamations = ['☯'];
                  const index = Math.floor(Math.random() * exclamations.length);
                  return exclamations[index];
            }
            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Arrow Left ]';
            document.body.style.backgroundColor = "#B576AD";
      } else if (keyCodePressed === 38) {

            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Arrow Up ]';
            document.body.style.backgroundColor = "#E04644";
      } else if (keyCodePressed === 39) {

            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Arrow Right ]';
            document.body.style.backgroundColor = "#FDE47F";
      } else if (keyCodePressed === 40) {

            document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Arrow Down ]';
            document.body.style.backgroundColor = "#7CCCE5";
      } else {
            document.body.style.backgroundColor = "#6F6456";
      }
}
/*let keyCodePressed;
let coordinateWarapper = document.getElementById('coordinates');

document.onkeyup = function (event) {
   const keyCodePressed = event.keyCode;
   document.getElementById('message').innerHTML = keyCodePressed;

   if (keyCodePressed === 13) {
      //Background color changes
      helpers.removeClass('animated');
      document.body.style.backgroundColor = helpers.generateRandomColorString();

      const coordinates = 'Width: ' + x + '<br>Height: ' + y;
      document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Enter ]';
      document.body.style.backgroundColor = "#B7D968";

   } else if (keyCodePressed === 37) {

      document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Arrow Left ]';
      document.body.style.backgroundColor = "#B576AD";
   } else if (keyCodePressed === 38) {

      document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Arrow Up ]';
      document.body.style.backgroundColor = "#E04644";
   } else if (keyCodePressed === 39) {

      document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Arrow Right ]';
      document.body.style.backgroundColor = "#FDE47F";
   } else if (keyCodePressed === 40) {

      document.getElementById('message').innerHTML = keyCodePressed + '<br>' + '[ Arrow Down ]';
      document.body.style.backgroundColor = "#7CCCE5";
   } else {
      document.body.style.backgroundColor = "#6F6456";
   }

   const helpers = {
      removeClass: (cssClass) => {
         if (document.body.classList.contains(cssClass)) {
            document.body.classList.remove(cssClass);
         }
      },

      generateRandomColorString: (alpha = true) => {
         // random RBG values
         const r = Math.floor(Math.random() * 255);
         const g = Math.floor(Math.random() * 255);
         const b = Math.floor(Math.random() * 255);
         // fully opaque if `false` is passed to function
         let a = 1;
         if (alpha) {
            a = Math.random();
         }

         return `rgba(${r},${g},${b},${a})`;
      }

   }
*/