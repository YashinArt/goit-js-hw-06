let valueNamber = 0
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
decrementBtn.addEventListener('click', decrementListener );
incrementBtn.addEventListener('click', incrementListener );

function decrementListener (){
console.log('клик');
valueEl.textContent = valueNamber -= 1;
};

function incrementListener (){
    console.log('клик');
    valueEl.textContent = valueNamber += 1;
};