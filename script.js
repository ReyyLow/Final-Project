//FOR NAVIGATION EFFECT WHEN SCROLLED
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
//FOR NAVIGATION LINKS ACTIVE STATE
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
const navLinks = document.querySelectorAll('.links a, .activity-button');
const sectionIds = ['home', 'projects', 'contact', 'activities'];
const sections = sectionIds.map(id => document.getElementById(id));
// Helper to remove all active classes
function clearActive() {
    navLinks.forEach(link => link.classList.remove('active'));
}
// Intersection Observer callback
function onIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            clearActive();
            const id = entry.target.id;
            if (id === 'activities') {
                // Always set Home as active when in activities section
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#home') {
                        link.classList.add('active');
                    }
                });
            } else {
                // Normal behavior for other sections
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });
}
//FOR PAGINATION
// Set up the observer
const observer = new IntersectionObserver(onIntersect, {
    threshold: 0.5 // Section is considered active when 50% visible
});
// Observe each section
sections.forEach(section => {
    if (section) observer.observe(section);
});
document.querySelector('.pagination-btn.prev').addEventListener('click', function() {
    // Get current active page
    const active = document.querySelector('.pagination-btn.active');
    if (active && active.previousElementSibling && active.previousElementSibling.tagName === 'A') {
        window.location.href = active.previousElementSibling.href;
    }
});
document.querySelector('.pagination-btn.next').addEventListener('click', function() {
    // Get current active page
    const active = document.querySelector('.pagination-btn.active');
    if (active && active.nextElementSibling && active.nextElementSibling.tagName === 'A') {
        window.location.href = active.nextElementSibling.href;
    }
});

//FOR BACK TO TOP BUTTON
window.onscroll = function () {
  let backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to Top When Clicked
document.getElementById("backToTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});