  const scriptURL = 'https://script.google.com/macros/s/AKfycbztDNmuclpBaoZJMNHG-QzzUrcAcW9MpMzwzNyz1gL67M1-u_Dv4kG_Sjix1N9iV-lJ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  const emails = document.getElementById('email');
  const submit = document.getElementById('submit');
  const thankMsg = document.querySelector('span');

  submit.addEventListener('click', ()=>{
    if(!emails == `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`){
        thankMsg.innerHTML = 'Please Enter Valid Email';
        thankMsg.style.color = 'red';
        return false;
    }
    else{
        thankMsg.innerHTML = 'Thank You For Subscribing';
        emails.value = '';
        return true;
        
    }
  })
