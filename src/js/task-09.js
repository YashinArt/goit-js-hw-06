
const buttonColorEL = document.querySelector('.change-color')
const spanColorEL = document.querySelector('.color')

buttonColorEL.addEventListener('click', onchangeColor);
function onchangeColor(){
  document.body.style.backgroundColor = getRandomHexColor()
  spanColorEL.textContent = getRandomHexColor()
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


