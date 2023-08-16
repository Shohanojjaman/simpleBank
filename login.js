// Log in form validation
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'shohan@gmail.com' && password === 'Shohan404') {
    location = 'bank.html';
  } else {
    alert('Invalid input.');
  }
});
