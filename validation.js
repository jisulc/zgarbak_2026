const form = document.getElementById('form');
const username_vstup = document.getElementById('firstname');
const email_vstup = document.getElementById('e-mail');
const password_vstup = document.getElementById('password');
const password2_vstup = document.getElementById('password-repeat');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', e => {
 
    if (username_vstup) {     
        errors = getSignupFormErrors(username_vstup.value, email_vstup.value, password_vstup.value, password2_vstup.value);
    } else {
         errors= getLoginFormErrors(email_vstup.value, password_vstup.value);
    }
    if (errors.length > 0) {
        e.preventDefault()
        errorMessage.innerText = errors.join(', ');
    }
});

function getLoginFormErrors(email, password) {
  
    let errors = []
    if (email === '' || email == null) {
        errors.push('Email is required');
        email_vstup.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_vstup.parentElement.classList.add('incorrect');
    }
    return errors;
}

function getSignupFormErrors(username, email, password, password2) {
  
    let errors = [] 

    if (username === '' || username == null) {
        errors.push('Username is required');
        username_vstup.parentElement.classList.add('incorrect');
    }
    if (email === '' || email == null) {
        errors.push('Email is required');
        email_vstup.parentElement.classList.add('incorrect');
    }

    if (password === '' || password == null) {
        errors.push('Password is required');
        password_vstup.parentElement.classList.add('incorrect');

    }
     if (password.length < 8) {
        errors.push('Password must have at least 8 characters');  
        password2_vstup.parentElement.classList.add('incorrect'); 
        password_vstup.parentElement.classList.add('incorrect');
    }

    if (password2 === '' || password2 == null) {
        errors.push('Password confirmation is required');
        password2_vstup.parentElement.classList.add('incorrect');
    }
    if (password !== password2) {
        errors.push('Passwords do not match');  
        password2_vstup.parentElement.classList.add('incorrect'); 
        password_vstup.parentElement.classList.add('incorrect');
    }

    return errors;
}   

const allInputs = [username_vstup, email_vstup, password_vstup, password2_vstup].filter(input => input != null);    
        allInputs.forEach(input => {
            input.addEventListener('input', () => {
                if(input.parentElement.classList.contains('incorrect')) {
                    input.parentElement.classList.remove('incorrect');
                    errorMessage.innerText = '';
                }
            }); 
        });  
        





    

//htps://www.youtube.com/watch?v=bVl5_UdcAy0
