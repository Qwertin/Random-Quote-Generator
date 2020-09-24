(function () {
    // body of the function

    function getQuote() {
        fetch('quotes.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            
            function randomQuote(){
               return Math.floor(Math.random() * Math.floor(data.length))    
            }
            
            let randomQuoteNumber = randomQuote();            
            document.getElementById('quoteText').innerHTML = " " + data[randomQuoteNumber].quoteText + " ";
            if ( !data[randomQuoteNumber].quoteAuthor.length == 0) {
                document.getElementById('quoteAuthor').innerHTML = '&mdash; ' + data[randomQuoteNumber].quoteAuthor;            
            } else {
                document.getElementById('quoteAuthor').innerHTML = '&mdash; ' + 'Unknown Author';
            }
            
            
        });
        
    }

    getQuote();

    document.getElementById('next-quo').addEventListener('click', getQuote);
  }());
  