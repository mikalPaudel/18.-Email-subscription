  const scriptURL = 'https://script.google.com/macros/s/AKfycbztDNmuclpBaoZJMNHG-QzzUrcAcW9MpMzwzNyz1gL67M1-u_Dv4kG_Sjix1N9iV-lJ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
