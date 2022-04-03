const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitter_button = document.getElementById('twitter');  
const newQuote = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading 
function loading(){
    loader.hidden = false;
    quoteContainer.hidden=true;
} 

// Remove Loading 
function complete(){
   if(!loader.hidden){
       quoteContainer.hidden=false;
       loader.hidden=true;
   }
}

// Get Quote From API
async function getQuote(){
    loading();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
       const response = await fetch(proxyUrl+apiUrl);
       const data = await response.json();
    //    if author is blank then display 'Unknown'
       if(data.quoteAuthor==""){
           authorText.innerText = 'Unknown';
       }
       else{
           authorText.innerText=data.quoteAuthor;
       }
    //    Reduce font-size for long-quotes
    if(data.quoteText.length>120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quotw');
    }
       quoteText.innerText = data.quoteText;
    //    Stop Loader and Show the Quote 
    complete();
    }

    catch(error){
        getQuote();
    }
}
// Tweet Quote
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    // '_blank' is used to open the twitter link in a new tab 
    window.open(twitterUrl, '_blank');
}
// Event Listeners
newQuote.addEventListener('click',getQuote);
twitter_button.addEventListener('click',tweetQuote);
//  On Load

getQuote();
