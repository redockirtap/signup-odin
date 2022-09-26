const form = document.querySelector('form');
// const password = form[2].value;
// const passwordToConfirm = form[6].value;
const errorMsg = document.createElement('p');
errorMsg.className = 'error';
const errorMsgField = document.querySelector('.right-form');
console.log(typeof errorMsgField);

const checkPassword = function() {
    errorMsg.textContent = 'Must match and be 8 symbols at least!';
    if (form[2].value === form[6].value && form[2].value.length >= 8) {
        errorMsgField.removeChild(errorMsg);

    }
    if (form[2].value !== form[6].value) {
        errorMsgField.appendChild(errorMsg);
    }
}

form.addEventListener('input', checkPassword)
