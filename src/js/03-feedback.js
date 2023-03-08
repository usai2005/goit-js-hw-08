const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textArea = document.querySelector('[name="message"]');

const STORAGE_KEY = "feedback-form-state";

onPageReload();

const inputsObj = {};

// ADDING AN OBJ TO LOCALSTORAGE USING LODASH.THROTTLE
form.addEventListener('input', throttle(handleFormEvent, 500));

function handleFormEvent() {

    inputsObj.email = input.value;

    inputsObj.message = textArea.value;

localStorage.setItem(STORAGE_KEY, JSON.stringify(inputsObj));
};


//ACTIONS BY SUBMITTING A FORM
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    
    e.preventDefault();

    console.log(inputsObj);

    e.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}

//FILLING THE FORM FIELDS AFTER RELOAD OF PAGE
function onPageReload() {

    const localStorageOutput = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (localStorageOutput) {

        input.value = localStorageOutput.email;
        textArea.value = localStorageOutput.message;
    };
};



