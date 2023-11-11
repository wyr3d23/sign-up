const usersName = document.getElementById('first_name');
const usersLastName = document.getElementById('last_name');
const usersEmail = document.getElementById('email');
const usersPhoneNum = document.getElementById('phone_number');

const userPw = document.getElementById('password');
const pwConfirm = document.getElementById('confirm_password');
const inputs = document.querySelector('.forms');


const isRequired = value => value !== '';
const isBetween = (length, min, max) => !(length < min || length > max);
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    // get form field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}

const showSuccess = (input, message) => {
    // get form field element
    const formField = input.parentElement;
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkUserName = () => {

    let valid = false;
    const min = 3,
        max = 25;

    const username = usersName.value.trim();

    if (!isRequired(username)) {
        showError(usersName, 'Name field cannot be blank');
    } else if (!isBetween(username.length, min, max)) {
        showError(usersName, `Name must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(usersName);
        valid = true;
    }
    return valid;
}

const checkUserLastName = () => {

    let valid = false;
    const min = 3,
        max = 25;

    const lastname = usersLastName.value.trim();

    if (!isRequired(lastname)) {
        showError(usersLastName, 'Last Name field cannot be blank');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(usersLastName, `Name must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(usersLastName);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {

    let valid = false;
    const email = usersEmail.value.trim();

    if (!isRequired(email)) {
        showError(usersEmail, 'Email field cannot be blank');
    } else if (!isEmailValid(email)) {
        showError(usersEmail, 'Email is not valid');
    } else {
        showSuccess(usersEmail);
        valid = true;
    }
    return valid;
}

const checkPass = () => {

    let valid = false;
    const password = userPw.value.trim();

    if (!isRequired(password)) {
        showError(userPw, 'Password field cannot be blank');
    } else if (!isPasswordSecure(password)) {
        showError(userPw, 'Password is not complex');
    } else {
        showSuccess(userPw);
        valid = true;
    }
    return valid;
}

const checkConfirmPass = () => {

    let valid = false;
    const confirmPassword = pwConfirm.value.trim();
    const password = userPw.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(pwConfirm, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(pwConfirm, 'Password does not match');
    } else {
        showSuccess(pwConfirm);
        valid = true;
    }
    return valid;
};

inputs.addEventListener('input', function(e) {
    switch (e.target.id) {
        case 'first_name':
            checkUserName();
            break;
        case 'last_name':
            checkUserLastName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPass();
            break;
        case 'password-confirm':
            checkConfirmPass();
            break;
    }
});


document.querySelector('.create-acc').addEventListener("submit", function(e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate the form
    let isUserValid = checkUserName(),
        isUserLastNameValid = checkUserLastName(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPass(),
        isConfirmPassValid = checkConfirmPass();

    let isFormValid = isUserValid &&
        isUserLastNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPassValid;

    // submit if form is valid
    if (isFormValid) {

    }
});