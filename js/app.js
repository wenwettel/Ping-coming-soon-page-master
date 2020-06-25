document.addEventListener('DOMContentLoaded', (e) => {

    let formulario = document.querySelector('.formulario');
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const errorDesktop = document.querySelector('.error-desktop');
        const errorMobile = document.querySelector('.error-mobile');
        
        const email = document.querySelector('#email');
        let error;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        errorDesktop.style.display ='none';
        errorMobile.style.display ='none';

        
        if(window.innerWidth >= 1439) {
           error = errorDesktop;
        }else {
           error = errorMobile;
        }

        if(email.value === '') {
            error.style.display = 'block';
            error.textContent = "Whoops! It looks like you forgot to add your email";

        } else if (!re.test(email.value)) {
            error.style.display = 'block';
            error.textContent = "Please provide a valid email address";
        }   

    })

})

