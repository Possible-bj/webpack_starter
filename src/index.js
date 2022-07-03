import generateJoke from './generateJoke.js'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const $laughImg = document.querySelector('#laughImg')
$laughImg.src = laughing

const $jokeBtn = document.querySelector('#joke-btn')
$jokeBtn.addEventListener('click', generateJoke)

generateJoke()
