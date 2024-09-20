let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Automatic slide change
setInterval(() => {
    moveSlide(1);
}, 5000); // Change image every 5 seconds
