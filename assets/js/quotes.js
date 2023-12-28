const quoteElement = document.getElementById("quote");

// Function to fetch the quote of the day
const fetchQuote = async () => {
  try {
    const currentDate = new Date().toLocaleDateString();
    const storedQuote = localStorage.getItem(currentDate);

    if (storedQuote) {
      // Check if a quote exists for the current date in local storage
      const display = `<div>
        <h3 class="homeInfoTitle">PHRASE OF THE DAY</h3>
        <span id="quote" class="homeInfoDescription">${storedQuote}</span>
      </div>`;
      quoteElement.innerHTML = display;
    } else {
      // If a quote does not exist for the current date in local storage, fetch it
      const response = await fetch(
        "https://api.quotable.io/quotes/random?tags=technology,famous-quotes|happiness|wisdom"
        // "https://api.quotable.io/quotes/random?tags=technology,famous-quotes"
      );

      if (response.ok) {
        const data = await response.json();
        const quote = `${data[0].content} - ${data[0].author}`;
        const display = `<div>
        <h3 class="homeInfoTitle">PHRASE OF THE DAY</h3>
        <span id="quote" class="homeInfoDescription">${quote}</span>
      </div>`;
        quoteElement.innerHTML = display;
        console.log(data);
        // Store the quote in local storage for the current date
        localStorage.setItem(currentDate, quote);
      } else {
        console.error("Error: " + response.status);
      }
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};

// Initially fetch and display the quote of the day
fetchQuote();
