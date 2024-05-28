const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const ism = document.getElementById('ism').value;
  const familiya = document.getElementById('familiya').value;
  const telRaqam = document.getElementById('tel-raqam').value;
  const email = document.getElementById('email').value;

  // Ushbu qismda siz kiritilgan ma'lumotlarni tekshirib, saqlash yoki jo'natish uchun ishlatishingiz mumkin
  console.log('Ism:', ism);
  console.log('Familiya:', familiya);
  console.log('Tel raqam:', telRaqam);
  console.log('Email:', email);

  // Formani tozalash
  form.reset();
});