const changeColorBtn = document.querySelector(".change-color");
const choseColor = document.querySelector(".color");


changeColorBtn.addEventListener("click", onChangeColorBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBtn() {
  const generetedColor = getRandomHexColor();
  document.body.style.backgroundColor = generetedColor;
  choseColor.textContent = generetedColor; 
  console.log(generetedColor);
}


