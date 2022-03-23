let prev = document.getElementById("prev")
let next = document.getElementById("next")
let slideIndex = 1;

showSlides(slideIndex);

prev.addEventListener("click", () => {
    plusSlider(-1)
})

next.addEventListener("click", () => {
    plusSlider(1)
})

function plusSlider(n) {
    showSlides(slideIndex += n);
}

function prevFunction() {
    showSlides(slideIndex += -1)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("projects-page");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("inactive-project-page");
    }
    slides[slideIndex-1].classList.remove("inactive-project-page");
  }