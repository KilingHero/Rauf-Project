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

document.addEventListener("DOMContentLoaded", function() {
  const sliderContainer = document.querySelector('.reviews-container');
  const reviews = document.querySelectorAll('.review');
  const nextButton = document.querySelector('.dalsi');
  const prevButton = document.querySelector('.predchozi');

  let currentIndex = 0;
  const totalReviews = reviews.length;

  if (!sliderContainer || totalReviews === 0 || !nextButton || !prevButton) {
      console.error('Některý z prvků nebyl nalezen. Zkontroluj, zda se třídy v HTML shodují s těmi v JavaScriptu.');
      return;
  }

  // Funkce pro kontrolu, zda je zobrazení na mobilním zařízení
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Nastavení počáteční pozice
  updateSliderPosition();

  // Posun doprava (další recenze)
  nextButton.addEventListener('click', function() {
    handleNext();
  });

  // Posun doleva (předchozí recenze)
  prevButton.addEventListener('click', function() {
    handlePrev();
  });

  // Funkce pro posun doprava (cyklický efekt)
  function handleNext() {
    if (currentIndex < totalReviews - 1) {
      currentIndex++;
      updateSliderPosition();
    } else {
      // Přechod na poslední pozici a bez animace zpět na první
      currentIndex++;
      updateSliderPosition();

      setTimeout(() => {
        sliderContainer.classList.add('no-transition'); // Vypne animaci
        currentIndex = 0; // Reset na první recenzi
        updateSliderPosition();
        setTimeout(() => sliderContainer.classList.remove('no-transition'), 0); // Znovu zapne animaci
      }, 500); // Doba trvání animace
    }
  }

  // Funkce pro posun doleva (cyklický efekt)
  function handlePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    } else {
      // Přechod na první pozici a bez animace zpět na poslední
      currentIndex--;
      updateSliderPosition();

      setTimeout(() => {
        sliderContainer.classList.add('no-transition'); // Vypne animaci
        currentIndex = totalReviews - 1; // Reset na poslední recenzi
        updateSliderPosition();
        setTimeout(() => sliderContainer.classList.remove('no-transition'), 0); // Znovu zapne animaci
      }, 500); // Doba trvání animace
    }
  }

  // Aktualizace pozice slideru
  function updateSliderPosition() {
    const reviewWidth = sliderContainer.querySelector('.review').clientWidth;
    sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    sliderContainer.style.transform = `translateX(-${(reviewWidth) * currentIndex}px)`;
    console.log(`Posunuto na index: ${currentIndex}, Šířka recenze: ${reviewWidth}px`);
  }

  // Reaguje na změnu velikosti okna prohlížeče a aktualizuje aktuální pozici
  window.addEventListener('resize', function() {
    updateSliderPosition(); // Zajistí, že se slider přizpůsobí nové velikosti okna
  });
});
