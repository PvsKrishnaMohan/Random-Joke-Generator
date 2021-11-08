let jokeparaEl = document.getElementById("jokeText");
let BtnEl = document.getElementById("jokeBtn");
let spinnerdiv = document.getElementById("spinner");

function jokeGenerator() {
    spinnerdiv.classList.remove("d-none");
    jokeparaEl.classList.add("d-none");
    let urlEl = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET",
    };

    fetch(urlEl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let joke = jsonData.value;
            //console.log(joke);
            jokeparaEl.classList.remove("d-none");
            spinnerdiv.classList.add("d-none");
            jokeparaEl.textContent = joke;
            //jokeparaEl.classList.add("joke-text");
        });
}

BtnEl.addEventListener("click", jokeGenerator);