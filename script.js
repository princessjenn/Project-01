let quoteButton = document.getElementById("quote-button");
let text = document.getElementById("quote");

fetch("https://api.kanye.rest")
  .then(response => {
    return response.json();
  })
  .then(data => {
    var quote = document.createElement("p");
    quote.textContent = data.quote;
    document.body.appendChild(quote);
  });

  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "id");
  encodedParams.append("text", "");
  

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '594f24e57fmshfcd896d19759eb4p17bf70jsn8317974053d7',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: encodedParams
  };
  

  fetch('https://text-translator2.p.rapidapi.com/translate', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));