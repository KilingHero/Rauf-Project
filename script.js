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

  if (!sliderContainer || reviews.length === 0 || !nextButton || !prevButton) {
      console.error('Některý z prvků nebyl nalezen. Zkontroluj, zda se třídy v HTML shodují s těmi v JavaScriptu.');
      return;
  }

  // Zobrazí první recenzi
  reviews[currentIndex].classList.add('active');

  // Posun doprava
  nextButton.addEventListener('click', function() {
      if (currentIndex < reviews.length - 1) {
          reviews[currentIndex].classList.remove('active'); // Skryje aktuální recenzi
          currentIndex++;
          reviews[currentIndex].classList.add('active'); // Zobrazí další recenzi
          updateSliderPosition();
      } else {
          console.log('Na konci slideru.');
      }
  });

  // Posun doleva
  prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
          reviews[currentIndex].classList.remove('active'); // Skryje aktuální recenzi
          currentIndex--;
          reviews[currentIndex].classList.add('active'); // Zobrazí předchozí recenzi
          updateSliderPosition();
      } else {
          console.log('Na začátku slideru.');
      }
  });

  // Aktualizace pozice slideru
  function updateSliderPosition() {
      const reviewWidth = sliderContainer.querySelector('.review').clientWidth; // Šířka jedné recenze
      sliderContainer.style.transform = `translateX(-${currentIndex * reviewWidth}px)`;
      console.log(`Posunuto na index: ${currentIndex}, Šířka: ${reviewWidth}`);
  }
});