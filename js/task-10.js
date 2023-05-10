function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  inputNumb: document.querySelector('#controls input'),
  boxesEl: document.querySelector('#boxes'),
}
let amount = '';

refs.inputNumb.addEventListener("input", showInputNumb);

function showInputNumb(event) { 
  refs.inputNumb = event.currentTarget.value;
  amount = refs.inputNumb;
   console.log('1-',amount);
  // return amount; 
}
console.log('2-', amount);

const boxStyles = [
  { height: '30px', width: '30px', backgroundColor: 'red', marginTop: '20px'}
]; 
const elements = []; 

// function createBoxes(amount) {
  for (i = 1; i = 3; i += 1){
      const make = 
  }
  


// const createBoxesEl = document.createElement("div");
//  const newBox = refs.boxesEl.insertAdjacentHTML('beforeend', `<div style = "height: 30px; width: 30px; display: block; background-color: red; margin-top: 20px;"></div>`);


function createBoxes(amount) {
  const sizes = Array.from({ length: amount }, (_, idx) => 30 + idx * 10);
  // console.log(sizes)
  const boxes = sizes.map((size) => {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    

  });

  containerEl.append(...boxes);
}
