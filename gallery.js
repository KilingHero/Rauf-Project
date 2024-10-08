var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var images = document.querySelectorAll('.gallery img');
var currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndex = index;
        openModal(this.src);
    });
});

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = "none";
}

document.querySelector('.close').addEventListener('click', closeModal);

modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target === document.querySelector('.close')) {
        closeModal();
    }
});

document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    modalImg.src = images[currentIndex].src;
});

document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    modalImg.src = images[currentIndex].src;
});

document.addEventListener('keydown', function(event) {
    if (modal.style.display === "flex") {
        if (event.key === "ArrowRight") {
            document.querySelector('.next').click();
        } else if (event.key === "ArrowLeft") {
            document.querySelector('.prev').click();
        } else if (event.key === "Escape") {
            closeModal();
        }
    }
});



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