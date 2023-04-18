let quoteButton = document.getElementById("quote-button");
let text = document.getElementById("quote");

fetch("https://api.kanye.rest")
  .then(response => {
  return response.json();

  })
  .then(data => {
   console.log(data)

  });
