const textArray = [
  "Software Developer",
  "Data Science Enthusiast",
  "C++ & Java Coder",
  "Tech Explorer",
];
let typedText = document.getElementById("typed-text");
let cursor = document.querySelector(".cursor");
let index = 0,
  charIndex = 0,
  isDeleting = false;

function type() {
  let current = textArray[index];
  if (isDeleting) {
    typedText.textContent = current.substring(0, charIndex--);
  } else {
    typedText.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textArray.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);
