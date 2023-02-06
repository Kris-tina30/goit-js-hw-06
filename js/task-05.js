const input = document.querySelector('#name-input');
const nameSpan = document.querySelector('#name-output');

console.log(nameSpan);

const onInputChange = event => {

if (input.value === "") {
return nameSpan.textContent = 'Anonymous';}

nameSpan.textContent = event.currentTarget.value;

console.log(event.currentTarget.value);
}

input.addEventListener('input',onInputChange);
