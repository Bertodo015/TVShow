//https://www.tvmaze.com/api#show-search

import { loadShows, searchShows } from "./views/TVShowView.js";

//Salva o endereço origem do domínio do site
const location = window.location;
//const origin = location.origin;
const { origin } = location;
//location.setItem("origin", origin);

//console.log(document.referrer);
const previousURL = document.referrer;
if (previousURL.startsWith(`${origin}/details.html`)) {
    loadShows();
}

const form = document.querySelector("#form-area form");
form.onsubmit = (e) => {
    e.preventDefault();

    searchShows();
};