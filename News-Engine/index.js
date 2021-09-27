const apiKey = "ef5dc2641b9f10193acbe7b5fa5ed412";
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://gnews.io/api/v4/top-headlines?country=in&lang=en&token=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            console.log(element, index)
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="flush-heading${index}">
                                <button class="accordion-button collapsed bg-info text-white" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                    ${element.title}
                                </button>
                            </h2>
                            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body">${element.description} — ${element.source.name} <br> <a href="${element.url}" target="_blank"> Read Full Article </a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Sorry Some Error Occured !");
    }
};

xhr.send();

document.addEventListener('keydown', function () {
    if (event.keyCode == 123) {
        alert("This function has been disabled to prevent from viewing code!");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        alert("This function has been disabled to prevent from viewing code!");
        return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
        alert("This function has been disabled to prevent from viewing code!");
        return false;
    }
}, false);

if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
        alert("This function has been disabled to prevent from viewing code!");
        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function () {
        alert("This function has been disabled to prevent from viewing code!");
        window.event.returnValue = false;
    });
}