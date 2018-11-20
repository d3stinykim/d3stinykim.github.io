//Runs after all content is loaded on the page
(function (inView) {


})(inView);

//does the same thing ss the above
window.onload = function () {

   const doSomething = function () {
      console.log('did something');
   };

   inView('#section-2')
      .on('enter', el => {
         el.className = 'active';
         el.style.backgroundColor = '#ffeb3b';
      })
      .on('exit', el => {
         // add circles
         const circle = document.createElement('div');
         circle.className = 'circle';
         circle.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
         circle.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
         el.appendChild(circle);

         el.className = '';
         el.style.backgroundColor = '#4db6ac';
      })

   inView.offset({
      bottom: 250
   })

   inView('#section-3 p')
      .on('enter', el => {
         el.className = 'active yellowtext';
      })
      .on('exit', el => {
         el.className = '';
      })
};