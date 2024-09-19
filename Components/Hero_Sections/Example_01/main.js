const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  console.log('clicked')
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})
