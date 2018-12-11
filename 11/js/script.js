(function (inView) {
})(inView);

window.onload = function () {

   const doSomething = function () {
      console.log('did something');
   };

   inView('#section03 p')
      .on('enter', el => {
         el.className = 'active yellowtext';
      })
      .on('exit', el => {
         el.className = '';
      })
};