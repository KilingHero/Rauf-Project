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