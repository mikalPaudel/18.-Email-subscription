  const scriptURL = 'https://script.google.com/macros/s/AKfycbztDNmuclpBaoZJMNHG-QzzUrcAcW9MpMzwzNyz1gL67M1-u_Dv4kG_Sjix1N9iV-lJ/exec'
  const form = document.forms['submit-to-google-sheet']
  const thankMsg = document.querySelector('span');
  const emails = document.getElementById('email');

// regex pattern for email
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  form.addEventListener('submit', e => {
    e.preventDefault()

 const email = emails.value.trim();

  if (email === '') {
    thankMsg.style.color = 'red';
    thankMsg.innerHTML = 'Please enter an email address';
    return;
  }

  if (!emailPattern.test(email)) {
    thankMsg.style.color = 'red';
    thankMsg.innerHTML = 'Please enter a valid email';
    return;
  }

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response);
        thankMsg.innerHTML = 'Thank You For Subscribing';
        thankMsg.style.color = 'green';
        setTimeout(() => {
        thankMsg.innerHTML = '';
        }, 5000); // wanted to keep displaying this message for 5s ended up displaying this message after 5s
        emails.value = '';
        form.reset();
    })
      .catch(error => {
        console.error('Error!', error.message);
        thankMsg.style.color = 'red';
      thankMsg.innerHTML = 'Something went wrong. Please try again.';
    
      })
  })

  