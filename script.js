let quoteSpanish = document.getElementById("spanish")
let quoteEnglish = document.getElementById("english");
document.getElementById("fetchButton").onclick = generatequote
document.getElementById("generate").onclick = translate
let quote;
function generatequote() {
  console.log ("clicked");
  fetch("https://api.kanye.rest")
    .then(response => {
      return response.json();
    })
    .then(data => {
      quote = data.quote
      console.log(quote)
      //if (language === "english") {
        quoteEnglish.innerHTML = `<p>${quote}</p>`;
      //}
      //else if (language === "spanish") {
        
        // Translate quote into spanish
    })
}
function translate() {
  
  console.log ("clicked");
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "es");
  encodedParams.append("text", quote);
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '594f24e57fmshfcd896d19759eb4p17bf70jsn8317974053d7',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: encodedParams
  }
  fetch('https://text-translator2.p.rapidapi.com/translate', options)
          .then(response => response.json())
          .then(response => {
            
            console.log(response.data.translatedText)
            // Render the translated quote on the page
            //var translatedQuote = document.createElement("p");
            //translatedQuote.textContent = response.data.translatedText;
            //document.body.appendChild(translatedQuote);
            var quotespanish = document.getElementById("spanish")
            quotespanish.innerHTML = `<p>${response.data.translatedText}</p>`
          })
          .catch(err => console.error(err));
          
  
}