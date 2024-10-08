document.getElementById('hamburger-icon').onclick = function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}


document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
      threshold: 0.2  // Spustí se, když je 10% elementu viditelné
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Zajistí, že se animace spustí jen jednou
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.item').forEach(item => {
      observer.observe(item);
    });
  });