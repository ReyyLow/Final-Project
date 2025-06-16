//For nav effect
// Add or remove 'scrolled' class to nav when scrolling past 50px
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {    
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Show all undergraduate program boxes when the button is clicked
document.getElementById('show-all-ungraduate-btn').onclick = function(e) {
  e.preventDefault();
  document.querySelectorAll('.program-box.hidden').forEach(el => {
    el.classList.remove('hidden');
    el.classList.add('program-box');
  });
  this.style.display = 'none';
};

// Show all graduate program boxes when the button is clicked
document.getElementById('show-all-graduate-btn').onclick = function(e) {
  e.preventDefault();
  document.querySelectorAll('.program-box-graduate.hidden').forEach(el => {
    el.classList.remove('hidden');
    el.classList.add('program-box-graduate');
  });
  this.style.display = 'none';
};
