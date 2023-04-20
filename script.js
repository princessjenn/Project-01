let quoteSpanish = document.getElementById("spanish")
let quoteEnglish = document.getElementById("english");
document.getElementById("fetchButton").onclick = generatequote
document.getElementById("generate").onclick = translate
let quote;
function generatequote() {
  console.log("clicked");
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
    })
}


// Translate quote into spanish
function translate() {

  console.log("clicked");
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

  // Translate quote into spanish
}

var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector("main");

// Get the mode from local storage or set it to "dark" by default
var mode = localStorage.getItem("mode") || "dark";

// Set the initial theme based on the mode
setTheme();

// Listen for a click event on the toggle switch
themeSwitcher.addEventListener("click", function () {
  // If mode is dark, switch to light mode
  if (mode === "dark") {
    mode = "light";
  }
  // If mode is light, switch to dark mode
  else {
    mode = "dark";
  }
  // Store the mode in local storage
  localStorage.setItem("mode", mode);
  // Set the theme based on the new mode
  setTheme();
});

// Function to set the theme based on the current mode
function setTheme() {
  // Set the class of the container based on the mode
  container.setAttribute("class", mode);
}
// Add an event listener for when the switch button is toggled
themeSwitcher.addEventListener("change", function() {
  // Save the state of the switch button in local storage
  localStorage.setItem("switchState", themeSwitcher.checked);
});

// Check the saved state of the switch button on page load
const savedSwitchState = localStorage.getItem("switchState");

if (savedSwitchState === "true") {
  // If the switch button was previously checked, set it to checked
  themeSwitcher.checked = true;
} else {
  // Otherwise, set it to unchecked
  themeSwitcher.checked = false;
}

