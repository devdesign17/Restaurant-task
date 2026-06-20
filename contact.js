document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const successBox = document.getElementById('formSuccess');

    let isValid = true;

  
    if (name.value.trim() === "") {
        name.parentElement.classList.add('invalid');
        isValid = false;
    } else {
        name.parentElement.classList.remove('invalid');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.parentElement.classList.add('invalid');
        isValid = false;
    } else {
        email.parentElement.classList.remove('invalid');
    }

   
    if (subject.value.trim() === "") {
        subject.parentElement.classList.add('invalid');
        isValid = false;
    } else {
        subject.parentElement.classList.remove('invalid');
    }

    if (message.value.trim() === "") {
        message.parentElement.classList.add('invalid');
        isValid = false;
    } else {
        message.parentElement.classList.remove('invalid');
    }

        if (isValid) {
        successBox.classList.remove('hidden');
       
        document.getElementById('contactForm').reset();
        
        setTimeout(() => {
            successBox.classList.add('hidden');
        }, 4000);
    } else {
        successBox.classList.add('hidden');
    }
});