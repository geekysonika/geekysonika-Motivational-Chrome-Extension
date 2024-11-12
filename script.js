fetch('http://quotable.io/random')
    .then(response => response.json())
    .then(Quotes => {
        const quote = Quotes.content;
        const author = Quotes.author;
        
       
        const quoteElement = document.getElementById('jokeElement');

        quoteElement.innerHTML = `"${quote}" - ${author}`;
    });
