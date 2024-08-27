import TVShow from "../models/TVShow.js";

const API_URL = "https://api.tvmaze.com/search/shows?";

export const search = async (term) => {
    const response = await fetch(API_URL + new URLSearchParams({ q: term }));   //requisição na api
    const results = await response.json();  //guarda a resposta no formato json
    const tvShows = [];

    //jogando todos os dados de example.json, um por vez dentro de r
    results.forEach((r) => {
        // Associação por desestruturação
        //const show = r.show;
        const { show } = r;
        const { id, name, type, language, genres, status, image, network, webChannel } = show;
        
        const tvShow = new TVShow();    //pega todas as propriedades do const acima
        tvShow.id = id;
        tvShow.name = name;
        tvShow.type = type;
        tvShow.language = language;
        tvShow.genres = genres.join(", ");
        tvShow.running = status === "Running" ? true : false;
        tvShow.imageURL = image ? image.medium : "/img/noimage.png";
        tvShow.largeImageURL = image ? image.original : "/img/noimage.png";
        tvShow.channel = network ? network.name : webChannel.name;

        //adiciona no final do array
        tvShows.push(tvShow);
    });
    
    return tvShows;
};