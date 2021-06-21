function attachGradientEvents() {
   let gradientBoxElement = document.getElementById('gradient-box'); 
   let gradientElement = document.getElementById('gradient');
   let resultElement = document.getElementById('result');

   gradientBoxElement.addEventListener('mouseover' ,(e) => {

    let percent = Math.floor((e.offsetX / e.currentTarget .offsetWidth ) * 100);
    resultElement.textContent = `${percent}%` 

   })

}