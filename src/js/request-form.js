// let form = document.querySelector('#sendForm');
// form.onsubmit = (e) => {
//   e.preventDefault();
//   console.log('send');
// }

export default function sendForm() {
  let form = document.querySelector('#sendForm');
  form.onsubmit = (e) => {
    e.preventDefault();
    console.log('send');
  }
}