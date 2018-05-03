var form = getForm();

form.addEventListener('submit', function (event) {
    var date = event.target[2].value;
    var isDataValid = validateDate(date);

    if (!isDataValid) {
        event.preventDefault();
        alert('your data is invalid');
    }
});

var body = document.getElementById('real-body');
body.appendChild(form);

function validateDate(date) {
    var pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20|21)[0-9][0-9]$/;
    var isValid = pattern.test(date);

    return isValid;
}

function getForm() {
    var form = document.createElement('form');
    form.setAttribute("name", "login");
    form.setAttribute("action", "../");

    var inputAge = getInputText();
    inputAge.setAttribute('name', 'age');
    inputAge.setAttribute('pattern', '[0-9]{0,}');
    inputAge.setAttribute('placeholder', 'type your age');
    form.appendChild(inputAge);

    var inputUsername = getInputText();
    inputUsername.setAttribute('name', 'username');
    inputUsername.setAttribute('pattern', 'user_[a-zA-Z0-9@\.]{0,}');
    inputUsername.setAttribute('placeholder', 'type user_ and after name');
    form.appendChild(inputUsername);

    var inputDate = getInputText();
    inputDate.setAttribute('name', 'date');
    var currentDate = getCurrentDate();
    inputDate.setAttribute('value', currentDate);
    form.appendChild(inputDate);

    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Validate Me');
    form.appendChild(submit);




    return form;
}

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    dd = normalizeDateNumber(dd);
    mm = normalizeDateNumber(mm);

    var formattedDate = dd + '/' + mm + '/' + yyyy;
    return formattedDate;
}

function normalizeDateNumber(number) {
    if (number < 10)
        number = '0' + number;

    return number;
}

function getInputText() {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');

    return input;
}



