// Smooth scrolling
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Variable for testing
let varOcg = "Portfolio loaded successfully!";
console.log(varOcg);

// Hover glow effect for buttons (extra polish)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseover', () => btn.style.boxShadow = '0 0 15px #6a11cb');
  btn.addEventListener('mouseout', () => btn.style.boxShadow = '');
});
