const refs = {
  inputFontSize: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};
console.log(refs.inputFontSize);
console.log(refs.text);

refs.inputFontSize.addEventListener('mouseover', changeMouseFontSize);



// function changeMouseFontSize(event) {
//   textInput = event.currentTarget.value;
//   console.log(textInput.length);
// };