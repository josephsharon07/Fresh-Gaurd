const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    alert('Signup Successful!!...')
    window.location.href = '/login.html';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  });