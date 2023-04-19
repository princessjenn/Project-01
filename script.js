  
function generatequote(){
  fetch("https://api.kanye.rest")
    .then(response => {
    return response.json();
  })
  .then(data => {
    //var quote = document.createElement("p");
    //quote.textContent = data.quote;
    //document.body.appendChild(quote);

    var quoteenglish = document.getElementById("english");
    quoteenglish.innerHTML = `<p>${data.quote}</p>`;
  

  //});

  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "es");
  encodedParams.append("text" , data.quote);
  

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
	  .then(response =>  {
      // Render the translated quote on the page
      //var translatedQuote = document.createElement("p");
      //translatedQuote.textContent = response.data.translatedText;
      //document.body.appendChild(translatedQuote);
      var quoutespanish=document.getElementById("spanish")
      quoutespanish.innerHTML=`<p>${response.data.translatedText}</p>`
    })
    .catch(err => console.error(err));
});
}
  document.getElementById("fetchButton").onclick = generatequote