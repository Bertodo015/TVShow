import TVShow from "./models/TVShow.js";
import { showDetails } from "./views/TVShowView.js";


const location = window.location;
const url = new URL(location.href)
console.log(location.origin);

const search = window.location.search;
//console.log(search);
const params = new URLSearchParams(search);
//console.log(params);

const show = new TVShow();
show.id = params.get("id");
show.channel = params.get("ch");
show.genres = params.get("gen");
show.imageURL = params.get("poster");
show.language = params.get("lang");
show.name = params.get("name");
show.running = params.get("run");
show.type = params.get("type");


showDetails(show);