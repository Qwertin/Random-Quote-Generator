(function(){
    
async function fetchQuotes() {
    const response = await fetch('quotes.json');
    const data = await response.json();
    
    function randomQuote () {
        return Math.floor(Math.random() * Math.floor(data.length))
    }

    let randomQuoteNumber = randomQuote();
    let accesQuote = data[randomQuoteNumber].quoteText;
    let accesAuthor = data[randomQuoteNumber].quoteAuthor;

    document.getElementById("quoteText").innerHTML = accesQuote;  
    if (!accesAuthor == 0) {
        document.getElementById("quoteAuthor").innerHTML = "&mdash; " + accesAuthor;
    } else {
        document.getElementById("quoteAuthor").innerHTML = "&mdash; " + "Unknown Author";     
    }  
}

fetchQuotes();
document.getElementById("next-quo").addEventListener('click', fetchQuotes);

}())