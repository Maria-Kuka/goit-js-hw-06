const btnValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[ data-action="decrement"]');
const btnIncrement = document.querySelector('[ data-action="increment"]');

let counterValue = 0;

const decrementCounter = () => {
   counterValue -=1;
   btnValue.textContent = counterValue;
}
const incrementCounter = () => {
    counterValue +=1;
    btnValue.textContent = counterValue;
 }
 btnDecrement.addEventListener('click', decrementCounter);
 btnIncrement.addEventListener('click', incrementCounter)
 // let counterValue = 0;
