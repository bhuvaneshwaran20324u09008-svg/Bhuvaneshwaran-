// Typing effect in the header
const typedText = document.querySelector(".typed-text");
const words = ["Your Name", "a Developer", "a Designer", "a Creator"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 150;
let erasingDelay = 80;
let newWordDelay = 1500;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, typingDelay + 200);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (words.length) setTimeout(type, newWordDelay + 250);
});
