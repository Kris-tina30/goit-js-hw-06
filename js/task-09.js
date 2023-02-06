function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const spanColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

const buttonClickHandler = event => {
  body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = body.style.backgroundColor;
}

changeColorBtn.addEventListener ('click',buttonClickHandler);