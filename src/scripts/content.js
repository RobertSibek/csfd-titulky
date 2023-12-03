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
        opensubtitles: "https://www.opensubtitles.org/en/search2/sublanguageid-cze/moviename-"
    }
    let openURL = provider_url.titulky + title;
    const a = document.createElement("a");
    const a2 = document.createElement("a");
    a.style.alignSelf = "center";
    a2.style.alignSelf = "center";
    a.style.verticalAlign = "bottom";
    a2.style.verticalAlign = "bottom";
    a.style.fontSize = "15px";
    a2.style.fontSize = "15px";
    a.style.padding = "5px";
    a2.style.padding = "5px";
    a.style.margin = "auto";
    a2.style.margin = "auto";
    a.href = openURL;
    a.innerText = "titulky.com";
    document.querySelector(cssSelectors.titleName).insertAdjacentElement("afterend", a);
    openURL = provider_url.opensubtitles + title;
    a2.href = openURL;
    a2.innerText = "opensubtitles.org";
    document.querySelector(cssSelectors.titleName).insertAdjacentElement("afterend", a2);
}
