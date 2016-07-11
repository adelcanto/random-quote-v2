// function to select and return a random quote object from the quotes array
function getRandomQuote (num) {
  var randomNum = Math.floor(Math.random() * num);
  return quotes[randomNum];
}

// function to call geRandomQuote and construct a string with the different properties
function printQuote () {
  var randQuote = getRandomQuote(quotes.length);
  var message = '<p class="quote">' + randQuote.quote + '</p>';
  message += '<p class="source">' + randQuote.source ;
  if (randQuote.citation !== null) {
    message += '<span class="citation">' + randQuote.citation + '</span>';
  }
  if (randQuote.year !== null) {
    message += '<span class="year">' + randQuote.year + '</span>';
  }
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;
}

// call to function printQuote for random quote appearing when opening site
printQuote();
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
