let counterValue = 0;

const buttonPlus = document.querySelector('[data-action="increment"]');
const buttonMinus = document.querySelector('[data-action="decrement"] ');
const value = document.querySelector('#value');

 const handleClickPlus = () => {   
   return value.textContent = counterValue += 1;
};

const handleClickMinus = () => {
 return value.textContent = counterValue -= 1;

};

buttonPlus.addEventListener("click", handleClickPlus);
buttonMinus.addEventListener("click", handleClickMinus);