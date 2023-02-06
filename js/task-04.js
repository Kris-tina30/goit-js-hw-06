const counterValue = document.querySelector('#value');

const buttonDecrement = document.querySelector('[data-action="decrement"]');

const buttonIncrement = document.querySelector('[data-action="increment"]');

const counter = {
  value: 0,
  buttonDecrementClickHandler() {
    return (this.value -= 1);
  },

  buttonIncrementClickHandler() {
    return (this.value += 1);
  },
};

buttonDecrement.addEventListener('click', () => {
  counter.buttonDecrementClickHandler();
  counterValue.textContent = counter.value;
});

buttonIncrement.addEventListener('click', () => {
  counter.buttonIncrementClickHandler();
  counterValue.textContent = counter.value;
});
