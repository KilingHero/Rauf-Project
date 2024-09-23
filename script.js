document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".automaticky");
    const text = " Pomáháme sportovcům regenerovat ";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Zpoždění mezi jednotlivými znaky
        }
    }

    typeText();
});


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



  
// JavaScript pro galerii
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".gallery-image");
var currentIndex;

images.forEach((img, index) => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    currentIndex = index;
  }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

function showImage(index) {
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = index;
  }
  modalImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].alt;
}

document.querySelector(".next").onclick = function() {
  showImage(currentIndex + 1);
}

document.querySelector(".prev").onclick = function() {
  showImage(currentIndex - 1);
}





// hodnoceni

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector('.reviews-container');
  const reviews = document.querySelectorAll('.review');
  const nextButton = document.querySelector('.dalsi');
  const prevButton = document.querySelector('.predchozi');

  let currentIndex = 1; // Začínáme na první skutečné recenzi (po duplikované poslední)
  const totalReviews = reviews.length;

  // Nastavení počáteční pozice
  updateSliderPosition(false); // Bez animace

  // Posun doprava (další recenze)
  nextButton.addEventListener('click', function () {
    currentIndex++;
    updateSliderPosition(true);
  });

  // Posun doleva (předchozí recenze)
  prevButton.addEventListener('click', function () {
    currentIndex--;
    updateSliderPosition(true);
  });

  // Aktualizace pozice slideru
  function updateSliderPosition(withTransition) {
    const reviewWidth = sliderContainer.querySelector('.review').clientWidth;

    // Zda použít animaci
    if (withTransition) {
      sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    } else {
      sliderContainer.style.transition = 'none';
    }

    // Posun slideru podle aktuálního indexu
    sliderContainer.style.transform = `translateX(-${(reviewWidth + 10) * currentIndex}px)`;

    // Pokud se dostaneme na virtuální poslední, přechod na skutečnou první recenzi
    if (currentIndex === totalReviews - 1) {
      setTimeout(() => {
        sliderContainer.style.transition = 'none'; // Vypnutí animace
        currentIndex = 1; // Skutečná první recenze
        sliderContainer.style.transform = `translateX(-${(reviewWidth + 10) * currentIndex}px)`;
      }, 500); // Doba trvání přechodu
    }

    // Pokud se dostaneme na virtuální první, přechod na skutečnou poslední recenzi
    if (currentIndex === 0) {
      setTimeout(() => {
        sliderContainer.style.transition = 'none'; // Vypnutí animace
        currentIndex = totalReviews - 2; // Skutečná poslední recenze
        sliderContainer.style.transform = `translateX(-${(reviewWidth + 10) * currentIndex}px)`;
      }, 500); // Doba trvání přechodu
    }
  }

  // Reaguje na změnu velikosti okna prohlížeče a aktualizuje aktuální pozici
  window.addEventListener('resize', function () {
    updateSliderPosition(false); // Bez animace
  });
});
