document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the initial slide
    slides[currentSlide].style.display = "block";
  
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
  
    nextButton.addEventListener("click", () => {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    });
  
    prevButton.addEventListener("click", () => {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].style.display = "block";
    });
  });
  