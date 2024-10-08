  // Získání elementů
  var modal = document.getElementById("myModal");
  var img = document.querySelector(".thumbnail");
  var modalImg = document.getElementById("img01");
  var close = document.getElementsByClassName("close")[0];

  // Po kliknutí na miniaturu otevře modal
  img.onclick = function () {
    modal.style.display = "flex";   // Zobrazí modální okno
    modalImg.src = this.src;        // Nastaví zdroj obrázku z miniatury
    modalImg.style.width = "auto";  // Šířka se přizpůsobí obrázku
    modalImg.style.height = "auto"; // Výška se přizpůsobí obrázku
    modalImg.style.maxWidth = "100%";  // Obrázek zabere maximálně 100% šířky obrazovky
    modalImg.style.maxHeight = "100%"; // Obrázek zabere maximálně 100% výšky obrazovky
    modalImg.style.borderRadius = "0"; // Zruší zaoblení obrázku
  };

  // Zavření modálního okna
  close.onclick = function () {
    modal.style.display = "none";  // Zavře modal
  };

  // Kliknutí mimo obrázek také zavře modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };



  // menu


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