import generateJoke from "./generateJoke.js";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";
import blueTop from "./assets/in_blue_top.jpg";

const $laughImg = document.querySelector("#image");
$laughImg.src = blueTop;

const $jokeBtn = document.querySelector("#joke-btn");
$jokeBtn.addEventListener("click", generateJoke);

generateJoke();
