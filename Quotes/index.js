const quoteContainer = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

let url ="https://famous-quotes4.p.rapidapi.com/random?category=all&count=1";
let host = "famous-quotes4.p.rapidapi.com";
let key = "1b0c26e5cdmsh5336705523b6d5ap18e86cjsn333fe89bca66";


let getQuote = () => {
fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": host,
		"x-rapidapi-key": key
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
  quoteContainer.innerHTML = `${response[0].text} <br><span id="genere" class="author">Author : ${response[0].author.toUpperCase()}</span>`;
})
.catch(err => {
	console.error(err);
});
};
getQuote();
btn.addEventListener("click", getQuote);

// Disabled Input from keyboard
(document.onkeydown = function (event) {
	if (event.keyCode == 123) {
	  return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
	  return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 86) {
	  return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 117) {
	  return false;
	} else if (event.ctrlKey && event.keyCode == 85) {
	  return false;
	}
 }),
	false;
 
 if (document.addEventListener) {
	document.addEventListener(
	  "contextmenu",
	  function (e) {
		 e.preventDefault();
	  },
	  false
	);
 } else {
	document.attachEvent("oncontextmenu", function () {
	  window.event.returnValue = false;
	});
 }