const slides = document.querySelectorAll(".slide");
const dotsBox = document.getElementById("dots");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
let current = 0;
let timer;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = index === 0 ? "dot active" : "dot";
  dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
  dot.addEventListener("click", () => {
    showSlide(index);
    restart();
  });
  dotsBox.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

function nextSlide() {
  showSlide(current + 1);
}

function prevSlide() {
  showSlide(current - 1);
}

function restart() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  restart();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  restart();
});

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form placeholder submitted. Connect this to Formspree, EmailJS, or backend later.");
  });
});

restart();
