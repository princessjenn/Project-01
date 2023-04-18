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

