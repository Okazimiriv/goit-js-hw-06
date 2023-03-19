const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener('input', textFontSize);

function textFontSize(event) {
 text.style.fontSize = event.currentTarget.value + "px";
  console.log(event.currentTarget.value);  
};

