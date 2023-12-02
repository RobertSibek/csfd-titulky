// CSFD Titulky
// Robert Sibek 2023

const cssSelectors = {
    titleName: "div.film-header-name>h1",
    buttonInjectSection: "div.box-rating-container"
}

const movieTitle = document.querySelector(cssSelectors.titleName);

if (movieTitle !== null) {
    executeScript(movieTitle.innerText);
}

function executeScript(title) {
    const provider_url = {
        titulky: "https://www.titulky.com/?Fulltext=",
        opensubtitles: "https://www.imdb.com/find/?q="
    }
    const openURL = provider_url.titulky + title;
    const a = document.createElement("a");
    a.style.alignSelf = "center";
    a.style.verticalAlign = "bottom";
    a.style.fontSize = "15px";
    a.style.padding = "5px";
    a.style.margin = "auto";
    a.href = openURL;
    a.innerText = "titulky.com";
    document.querySelector(cssSelectors.titleName).insertAdjacentElement("afterend", a);
}
