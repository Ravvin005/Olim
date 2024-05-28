
// Har bir tugmaning bosilganda bo'sh sahifa ochilishi
const subjectBtns = document.querySelectorAll('.subject-btn');
subjectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = '#'; // Bo'sh sahifa ochish
  });
});

// Navigatsiya tugmasiga effektlar qo'shish
const navBtn = document.querySelector('.nav-btn');
navBtn.addEventListener('mouseenter', () => {
  navBtn.style.transform = 'scale(1.1)';
});
navBtn.addEventListener('mouseleave', () => {
  navBtn.style.transform = 'scale(1)';
});

// Foydalanuvchi tugmasiga effektlar qo'shish
const userBtn = document.querySelector('.user-btn');
userBtn.addEventListener('mouseenter', () => {
  userBtn.style.transform = 'scale(1.1)';
});
userBtn.addEventListener('mouseleave', () => {
  userBtn.style.transform = 'scale(1)';
});