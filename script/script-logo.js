const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');

loginBtn.addEventListener('click', () => {
  const usernameInput = document.querySelector('.user-box input[name="username"]');
  const passwordInput = document.querySelector('.user-box input[name="password"]');

  // Kirish logikasi
  console.log('Username:', usernameInput.value);
  console.log('Password:', passwordInput.value);
});

registerBtn.addEventListener('click', () => {
  // Ro'yhatdan o'tish logikasi
  window.location.href = 'register.html';
});