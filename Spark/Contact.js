const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email')
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const name_error = document.getElementById('name-error');
const email_error = document.getElementById('email-error');
const message_error = document.getElementById('message-error');
const submit = document.getElementById('name-error');



form.addEventListener('submit', e => {
    var email_check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(name.value==='' || name.value === null){
        e.preventDefault();
        name_error.innerHTML = 'Name is required'
    }

    if(!email.value.match(email_check)){
        e.preventDefault()
        email_error.innerHTML = 'Email is required'
    }

    if(message.value === ''||message === null){
        e.preventDefault()
        message_error.innerHTML = 'Message is required'
    }

});

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('error');
    

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//     const subjectValue = subject.value.trim();
//     const messageValue = message.value.trim();

//     if(nameValue===''){
//         setError(name, 'Name is required');
//     }
//     else{
//         setSuccess(name);
//     }

//     if(emailValue===''){
//         setError(email, 'Email is required')
//     }
//     else if(!isValidEmail(emailValue)){
//         setError(email, 'Provide a valid email');
//     }

//     if(messageValue === ''){
//         setError(message, 'Message is required')
//     }
//     else{
//         setSuccess(message);
//     }
// }    