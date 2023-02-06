const input = document.querySelector('#font-size-control');

const spanText = document.querySelector('#text');

input.addEventListener ('input', event => {
event.currentTarget.attributes.min.value < event.currentTarget.value > event.currentTarget.attributes.max.value;
spanText.style.fontSize = event.currentTarget.value + 'px';

console.dir(event.currentTarget.attributes.max.value);
console.dir(event.currentTarget.value);
}) 

