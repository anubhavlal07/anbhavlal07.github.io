const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=single";


//   Fetch Api 
let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
    });
  timeleft = 20; // Reset the timer
};
getJoke();
btn.addEventListener("click", getJoke);

// Count down timer 
var timeleft = 20;
var downloadTimer = setInterval(function () {
  document.getElementById("next").innerHTML = `Next joke in ${timeleft}s.`;
  timeleft -= 1;
  if (timeleft <= 0) {
    //  clearInterval(downloadTimer);
    btn.click();
    timeleft = 20;
   //  $("#btn").mouseenter();
  }
}, 1000);
