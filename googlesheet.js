const scriptURL = 'https://script.google.com/macros/s/AKfycbx5d_iIs6t0fFaVF3DnpHYyGFvbtWj-mKrAu6duB83j6KY3xSuZHsPP6Ni2eYKOs2e6mg/exec'


const form = document.forms['contact-form']



form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => ("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

