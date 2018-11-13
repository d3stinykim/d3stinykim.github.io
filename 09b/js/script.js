(function () {
      alert('Click anywhere on this page to get the instructions!');

      let counter = 0;

      // Save this for later use
      const originalHTML = document.body.innerHTML;

      // crash varibles
      crashCymbolAll = document.getElementById('Crash');
      crashCymbol = document.getElementById('Crash-Cymbol');
      crashAudio = document.getElementById('Crash-Audio');
      // right tom drum varibles
      rightTomDrumAll = document.getElementById('Tom-Right-All');
      rightTomDrum = document.getElementById('Tom-Right-Drum');
      smallTomAudio = document.getElementById('Small-Rack-Tom-Audio');
      // left tom drum varibles
      leftTomDrumAll = document.getElementById('Tom-Left-All');
      leftTomDrum = document.getElementById('Tom-Left-Drum');
      bigTomAudio = document.getElementById('Big-Rack-Tom-Audio');
      // hi-hat varibles
      hiHatAll = document.getElementById('Hi-Hat');
      hiHatTop = document.getElementById('Hi-Hat-Top');
      hiHatBottom = document.getElementById('Hi-Hat-Bottom');
      hiHatStandTop = document.getElementById('Hi-Hat-Stand-Top');
      hiHatOpenAudio = document.getElementById('Hi-Hat-Open-Audio');
      hiHatClosedAudio = document.getElementById('Hi-Hat-Closed-Audio');
      // floor tom drum varibles
      floorTomDrumAll = document.getElementById('Floor-Tom');
      floorTomAudio = document.getElementById('Floor-Tom-Audio');
      // snare drum varibles
      snareDrumAll = document.getElementById('Snare');
      snareDrum = document.getElementById('Snare-Drum');
      snareAudio = document.getElementById('Snare-Audio');
      // kick drum varibles
      kickDrumAll = document.getElementById('Kick');
      kickAudio = document.getElementById('Kick-Audio');
      // Autoplay button
      autoButton = document.getElementById('auto-button');

      document.onclick = function (event) {
            //01: click interactions –– alert pops as a guide
            alert('Press [ 1 ] to fill the page with rotating Pandas!');
            alert('Press [ 2 ] to add some shimmering lights to the stage!');
            alert('Press [ 3 ] to add show reactions to this!');
            alert('Press [ Spacebar ] to change the background colors!');
            alert('Press [ Enter ] to clear the page!');
      }
      document.onkeydown = function (event) {
            //02: keydown interactions –– add auidio

            if (event.keyCode === 32) {
                  // Prevents the space bar from scrolling down when pressed
                  event.preventDefault();

            }
            //3rd interaction: add audio
            if (event.keyCode === 66) {
                  // b key to play Kick Audio
                  playKickAudio();
            }

            // b key to play FloorTom Audio
            if (event.keyCode === 72) {
                  playSnareAudio();
            }

            // j key to play HiHatOpen Tom Audio
            if (event.keyCode === 74) {
                  playHiHatClosedAudio();
            }

            // y key to play SmallTom Audio
            if (event.keyCode === 89) {
                  playSmallTomAudio();
            }

            // t key to play BigTom Audio
            if (event.keyCode === 84) {
                  playBigTomAudio();
            }

            // g key to play FloorTom Audio
            if (event.keyCode === 71) {
                  playFloorTomAudio();
            }

            // f key to play Crash Audio
            if (event.keyCode === 70) {

                  playCrashAudio();
            }
      }

      document.onkeyup = function (event) {

            const keyCodePressed = event.keyCode;
            const coordinates = helpers.generateCoordinates();

            //02: keyup interactions –– clear out the pages
            if (keyCodePressed === 13) {
                  // Enter key to clear out the page
                  event.preventDefault();
                  document.body.innerHTML = originalHTML;

                  //03: keyup interactions –– add images
            } else if (keyCodePressed === 49) {
                  // 1 key for image of a PandaBear
                  const degreesRotation = Math.floor(Math.random() * 360);
                  const bear = document.createElement('img');
                  bear.className = 'Panda Bear';
                  bear.src = `images/panda.png`;
                  bear.style.left = `${coordinates.x}px`;
                  bear.style.top = `${coordinates.y}px`;
                  bear.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
                  bear.style.transform = `rotate(${degreesRotation}deg)`;
                  document.body.appendChild(bear);

                  //04: keyup interactions –– add shapes
            } else if (keyCodePressed === 50) {
                  // 2 key for shimmering lights
                  const lights = document.createElement('div');
                  lights.className = 'lights';
                  lights.style.left = `${coordinates.x}px`;
                  lights.style.top = `${coordinates.y}px`;
                  lights.style.backgroundColor = helpers.generateRandomColorString(false);
                  document.body.appendChild(lights);

                  //05: keyup interactions –– add phrase      
            } else if (keyCodePressed === 51) {
                  const degreesRotation = Math.floor(Math.random() * 360);
                  // 3 for prompt phrase
                  const phrase = document.createElement('h2');
                  phrase.className = 'phrase';
                  phrase.style.left = `${coordinates.x}px`;
                  phrase.style.top = `${coordinates.y}px`;
                  phrase.innerText = getPhrase();
                  phrase.style.color = helpers.generateRandomColorString(false);
                  phrase.style.transform = `rotate(${degreesRotation}deg)`;
                  document.body.appendChild(phrase);

                  //06: keyup interactions –– change the color of background
            } else if (keyCodePressed === 32) {
                  // Space bar randomly changes background color of the body
                  helpers.removeClass('animated');
                  document.body.style.backgroundColor = helpers.generateRandomColorString();
            }

            // always keeps the message on top of other elements
            counter++;
      }

      const getPhrase = function () {
            const exclamations = ['Wow!', 'Neat!', 'Incredible!', 'Amazing!', 'Bravo!', 'Fantastic!', 'OMG'];
            const index = Math.floor(Math.random() * exclamations.length);
            return exclamations[index];
      }

      // This object contains helper functions
      const helpers = {

            removeClass: (cssClass) => {
                  if (document.body.classList.contains(cssClass)) {
                        document.body.classList.remove(cssClass);
                  }
            },

            generateCoordinates: () => {
                  const x = Math.floor(Math.random() * window.innerWidth);
                  const y = Math.floor(Math.random() * window.innerHeight);
                  return { x, y };
            },

            // helpers.generateRandomColorString()
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

}());


// crash audio
function playCrashAudio() {
      crashAudio.currentTime = 0;
      crashAudio.play();
}

// crash stuff
function crash() {
      crashtl.restart();
      crashtl.play();
      playCrashAudio();
}


// right tom audio
function playSmallTomAudio() {
      smallTomAudio.currentTime = 0;
      smallTomAudio.play();
}

// right tom stuff
function rightTom() {
      rightTomtl.restart();
      rightTomtl.play();
      playSmallTomAudio();
}


// left tom audio
function playBigTomAudio() {
      bigTomAudio.currentTime = 0;
      bigTomAudio.play();
}

// left tom tl stuff
function leftTom() {
      leftTomtl.restart();
      leftTomtl.play();
      playBigTomAudio();
}


// floor tom audio
function playFloorTomAudio() {
      floorTomAudio.currentTime = 0;
      floorTomAudio.play();
}

// floor tom tl stuff
function floorTom() {
      floorTomtl.restart();
      floorTomtl.play();
      playFloorTomAudio();
}


// snare audio
function playSnareAudio() {
      snareAudio.currentTime = 0;
      snareAudio.play();
}

// snare tl stuff
function snare() {
      snaretl.restart();
      snaretl.play();
      playSnareAudio();
}

// kick audio
function playKickAudio() {
      kickAudio.currentTime = 0;
      kickAudio.play();
}

// kick tl stuff
function kick() {
      kicktl.restart();
      kicktl.play();
      playKickAudio();
}

// high hat audio
function playHiHatClosedAudio() {
      hiHatClosedAudio.currentTime = 0;
      hiHatClosedAudio.play();
}
function playHiHatOpenAudio() {
      hiHatOpenAudio.currentTime = 0;
      hiHatOpenAudio.play();
}
