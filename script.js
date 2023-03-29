const quotes = [  "The best way to predict the future is to invent it.",  "It always seems impossible until it's done.",  "If you want to go fast, go alone. If you want to go far, go together.",  "Believe you can and you're halfway there.",  "Success is not final, failure is not fatal: It is the courage to continue that counts.",  "You miss 100% of the shots you don't take. -Wayne Gretzky",  "The only way to do great work is to love what you do. -Steve Jobs",  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",  "Chase your dreams but always know the road that'll lead you home again. -Tim McGraw"];

const tweetBtn = document.getElementById('tweet-btn');
const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

generateBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;

  const quoteText = encodeURIComponent(randomQuote);
  const authorHandle = encodeURIComponent('@examplehandle');
  const hashtag = encodeURIComponent('#QuoteOfTheDay');

  tweetBtn.href = `https://twitter.com/intent/tweet?text=${quoteText} ${authorHandle} ${hashtag}`;
});

copyBtn.addEventListener('click', () => {
  const quoteToCopy = quoteElement.textContent;
  const tempInput = document.createElement('input');
  tempInput.value = quoteToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Quote copied to clipboard!');
});



