fetch('http://quotable.io/random')
    .then(response => response.json())
    .then(Quotes => {
        const quote = Quotes.content;
        const author = Quotes.author;
        
       
        const quoteElement = document.getElementById('jokeElement');

        quoteElement.innerHTML = `"${quote}" - ${author}`;
    });
    // .catch(error => {
    //     console.error('Error fetching quote:', error);  // Handling any potential errors
    // });