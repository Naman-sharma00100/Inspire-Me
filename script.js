const adviceText = document.querySelector(".advice-text");
const adviceBtn = document.querySelector(".advice-btn");
const quoteText = document.querySelector(".quote-text");
const authorText = document.querySelector(".author");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const advice = data.slip.advice;
  adviceText.innerText = advice;
}

async function getQuote() {
    const response = await fetch(
      "https://api.quotable.io/random"
    );
    const data = await response.json();
    const quote = data.content;
    const author = data.author;
    quoteText.innerText = quote;
    authorText.innerText = `- ${author}`;
  }
  

adviceBtn.addEventListener("click", getAdvice);
document.addEventListener("DOMContentLoaded", getAdvice);
document.addEventListener("DOMContentLoaded", getQuote);
document.querySelector(".quote-btn").addEventListener("click", getQuote);
