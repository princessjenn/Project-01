# Project-01 - Kanye International
## User Story
AS a user I WANT to click a button to translate Kanyes quotes SO THAT I can read them in Spanish as well as English
ALSO I WANT a feature where I can switch a toggle SO THAT I can decide if I want to view the page in dark or light mode

## Acceptance Criteria
GIVEN the webpage meets accessibility standards WHEN there are two working server-side apis
WHEN the local storage can store a light/dark theme toggle so THEN the user can store whether they want to view the page in light or dark mode
WHEN the UI is polished
WHEN the good coding quality standards are met (indentation,scoping,naming etc)
WHEN the user is able to use the click me button to translate the Kanye quote from english to spanish


We ran into a few problems while creating this webpage: 
- having the webpage centered. We fixed this by adding some margin and padding to the buttondiv in CSS
- getting the light/dark theme toggle to function correctly after refreshing the webpage
- getting the buttons to work without the english and spanish versions popping up at the same time. We fixed this by adding a class and id to the button in HTML for spanish, and creating an on click in java so that whenever the translate button is clicked then we will see the spanish translated text

Overall we had a lot of fun and enjoyed building this webpage as a group!

# Project 01 — International Kanye API

## Description

Our project group wanted a way to use two web APIs working with each other to fetch data. In our project example, our first API fetches data (a randomly generated quote from Kanye West) and then has the second API fetching data to translate the randomized quote into Spanish! Then we used Local Storage to keep record of the user’s preference whether they are wanting to have a dark mode UI, vs a light mode UI (incase the user comes back to read a quote/translate later on)!

Used https://api.kanye.rest API to retrieve data for quotes, then https://text-translator2.p.rapidapi.com/translate API to translate into Spanish. Also Used localStorage to store any persistent data.

## Installation

This Project has the following tech features used: 
* An event listener for the search buttons and save to local storage
* Event listeners
* script.js
* Index.html
* Styles.css


## Usage

* Open the application into your browser
* Click toggle switch button to change from Day Mode to Night Mode (optional)
* Click on first button to generate a quote from Kanye West
* The quote will display on page, and then you can click the “Translate to Spanish” button to Translate the quote that was generated!

## Main Features Used in Application:

To make the API’s data object render onto the page, we created a new p element and appended it to the body of the document to display the original quote from the first API. Then, we created a new URLSearchParams object and append the necessary parameters for the translation API. We set the text parameter to the quote property of the data object we received from the first API.
We then created a new options object and set the  headers for the translation API. We also set the body of the request to the parameters.
We then made a ‘fetch()’ request to the translation API with the ‘options’ object. Once we receive the translated quote, we create a new p element and set its text content to the translated quote. We then appended the translated quote to the body of the document to display it on the page.


We modified the second then() method to create a new HTML element and set its text content to the data we received from the API. 

-  .then(data => {
    var quote = document.createElement("p");
    quote.textContent = data.quote;
    document.body.appendChild(quote);

We created a new p element using document.createElement("p"). Then, we set its text content to the quote property of the data object we received from the API using quote.textContent = data.quote;. Finally, we append the p element to the body of the document using document.body.appendChild(quote);.

__________________________________________________________________________________________

We used the second API to translate the quote from the first API by sending a request to the translation API inside the second then() method of the first API.

- .then(response => {
        // Render the translated quote on the page
        var translatedQuote = document.createElement("p");
        translatedQuote.textContent = response.text;
        document.body.appendChild(translatedQuote);
      })
      .catch(err => console.error(err));

We created a new p element and append it to the body of the document to display the original quote from the first API. Then, we created a new URLSearchParams object and appended the necessary parameters for the translation API. We set the text parameter to the quote property of the data object we received from the first API.
We then created a new options object and set the necessary headers for the translation API. We also set the body of the request to the encoded parameters.
We then make a fetch() request to the translation API with the options object. Once we receive the translated quote, we created a new p element and set its text content to the translated quote. We then append the translated quote to the body of the document to display it on the page.

__________________________________________________________________________________________

Then, we set the textContent property of the translatedQuote element to the translatedText property of the response.data object. This assigns the translated text returned by the API to the textContent property of the p element.
Finally, we appended the translatedQuote element to the body of the HTML document using the appendChild method of the document.body object. This adds the p element containing the translated text the page, so it is visible to the user.

    var quote = document.createElement("p");
    quote.textContent = data.quote;
    document.body.appendChild(quote);

Turned into this ——>>>

    var quoteContainer1 = document.getElementById("quote-container-1");
    quoteContainer1.innerHTML = `<p>${data.quote}</p>`;



In this updated code, we first select the quote-container-1 div element and set its innerHTML to contain a p element with the original quote.
Then, in the second then block where we receive the translated text, we create a new p element for the translated quote and set its textContent property to the translated text. Finally, we append the translatedQuote element to the quoteContainer1 div element, so that the translated quote is added to the same div element as the original quote. This ensures that the quote and its translation are displayed together in the same place.

___________________________________________________________________________________________

This code retrieves the mode from local storage, or defaults to "dark" if no mode is stored. It then sets the initial theme based on the mode by calling the setTheme() function.
When the toggle switch is clicked, the mode will update and stored in local storage using 'localStorage.setItem()'. The theme is then updated based on the new mode by calling setTheme() again.
The setTheme() function sets the class of the container element based on the mode, which in turn updates the background color and text color of the page!

// Listen for a click event on the toggle switch
themeSwitcher.addEventListener("click", function () {
  // If mode is dark, switch to light mode
  if (mode === "dark") {
    mode = "light";
  }
  // If mode is light, switch to dark mode
  else {
    mode = "dark";
  }  // Store the mode in local storage
  localStorage.setItem("mode", mode);
  // Set the theme based on the new mode
  setTheme();
});

function setTheme() {
  container.setAttribute("class", mode);
}
___________________________________________________________________________________________


## Credits

Project Collaborators:

Ashlyn Smith
https://github.com/ashlynsmith

Keri Perry 
https://github.com/kerperryjr

## License
See repository
