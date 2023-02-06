const validationInput = document.querySelector('#validation-input');


validationInput.addEventListener ('blur', event => {
    if (validationInput.value.length === Number(validationInput.dataset.length)){
        validationInput.classList.remove('invalid');
        return validationInput.classList.add('valid');
    }
    validationInput.classList.add('invalid');
    
    })

