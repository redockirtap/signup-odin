const form = document.querySelector('form');
const password = form[2].value;
const passwordToConfirm = form[6].value;
const errorMsgField = form.querySelector('label[for="user_password"]');
console.log(typeof errorMsgField);

const checkPassword = function() {
    const errorMsg = '(Must match and >= 8 symbols!)'
    errorMsg.className = 'error';
    if (form[2].value === form[6].value) errorMsgField.textContent = 'Password';
    if (errorMsgField.textContent.match(`${errorMsg}`)) return;
    if (form[2].value !== form[6].value) {
        errorMsgField.textContent += ` ${errorMsg}`;
    }
}

form.addEventListener('input', checkPassword)
