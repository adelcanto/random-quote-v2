var arr = quotes.slice(0);
var randomNum;

// function to select and return a random quote object from the quotes array
function getRandomQuote (num) {
      randomNum = Math.floor(Math.random() * num);
      return arr[randomNum];
    }

// function to generate random number between 0 and 256
function getRandomNumber () {
  return Math.floor(Math.random() * 256);
}

// function to generate random color and change background and button color
function getRandomColor () {
  var randColor = 'rgb(' + getRandomNumber() + ', ' + getRandomNumber() + ', ' + getRandomNumber() + ')'
  document.getElementById('bodyStyle').style.backgroundColor = randColor;
  document.getElementById('loadQuote').style.backgroundColor = randColor;
}

// functio to remove sected quote and reload array with quotes when empty
function modifyArr () {
  arr.splice(arr.indexOf(arr[randomNum]),1);
  if (arr.length < 1) {
    arr = quotes.slice(0);
  }
}

// function to call geRandomQuote and construct a string with the different properties
function printQuote () {
    console.log(arr);
    var randQuote = getRandomQuote(arr.length);
    modifyArr();
    var message = '<p class="quote">' + randQuote.quote + '</p>';
    message += '<p class="source">' + randQuote.source ;
    if (randQuote.citation != null) {
      message += '<span class="citation">' + randQuote.citation + '</span>';
    }
    if (randQuote.year != null) {
      message += '<span class="year">' + randQuote.year + '</span>';
    }
    if (randQuote.tags != null) {
      message += '<span class="citation">' + randQuote.tags + '</span>';
    }
    message += '</p>';
    getRandomColor();
    document.getElementById('quote-box').innerHTML = message;
}

// call to function printQuote for random quote appearing when opening site
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
