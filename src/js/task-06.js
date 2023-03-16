const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);
const styleBorder = document.querySelector("#validation-input");
let textInput = '';

function onInputChange(event) {
  textInput = event.currentTarget.value;
  console.log(textInput.length);
};

function onInputBlur(event) {    
  if (textInput.length !== dataLength) {
    console.log(textInput.length !== dataLength);
  
  styleBorder.classList.remove("valid");
  styleBorder.classList.add("invalid"); 
  return;
  } else    
  styleBorder.classList.remove("invalid");
  styleBorder.classList.add("valid");  
};

input.addEventListener('input', onInputChange);
input.addEventListener('blur', onInputBlur);





