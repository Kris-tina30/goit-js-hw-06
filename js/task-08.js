const form = document.querySelector('.login-form');

const formSubmitHandler = event => {

event.preventDefault();

const formElements = event.currentTarget.elements;

 const email = formElements.email.value;
 const password = formElements.password.value;
 
const formData = {
    email,
    password,
}

if ( email === '' || password === '') {
alert('Всі поля повинні бути заповненні!')
}

console.log(formData);

event.currentTarget.reset();
};

 form.addEventListener ('submit',formSubmitHandler);