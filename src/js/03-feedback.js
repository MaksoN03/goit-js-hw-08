const throttle = require('lodash.throttle');

const feedBackForm = document.querySelector('.feedback-form')
const formInput = document.querySelector('.feedback-form input')
const textAreaForm = document.querySelector('.feedback-form textarea')

const formUserData = {};
const STORAGE_KEY = "feedback-form-state"

feedBackForm.addEventListener('submit', onSubmit);
feedBackForm.addEventListener('input', throttle(onInputUserData, 500));

onGetDataUserInput()

function onSubmit(evt) { 
    evt.preventDefault();
    feedBackForm.reset();
    console.log(formUserData)
    localStorage.removeItem('STORAGE_KEY');

}

function onInputUserData(evt) {
    formUserData[evt.target.name] = evt.target.value || '';
    const formUserDataJSON = JSON.stringify(formUserData);
    localStorage.setItem('STORAGE_KEY', formUserDataJSON)
};

function onGetDataUserInput() {
    
    const saveDataUser = JSON.parse(localStorage.getItem('STORAGE_KEY'));
    formUserData.email = saveDataUser.email;
    formUserData.message = saveDataUser.message;
     
    if (saveDataUser) { 
        formInput.value = saveDataUser.email ?? '';
        textAreaForm.value = saveDataUser.message ?? '';
    }
        
}
