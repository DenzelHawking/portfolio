const form = document.getElementById('contact-form');

form.onsubmit = (e) => {
  e.preventDefault();
  // submitForm('../server/sendForm.pnp', 'POST', new FormData(form));
}


function submitForm (url, method, data) {
  fetch(url, {
    method: method,
    body: data
  })
  .then()
}