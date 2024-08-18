/* 
    Auteur: FauZaPespi
    Date: 18/08/2024 | 15h40
    Website: https://fauza.fr
    Détail [FR]: Un simple Captcha qui pourrait ressembler à un crochetage
    Detail [EN]: A simple Captcha that could look like a lockpick
    File: script.js
*/

var rdmCorrect = getRandomInt(100);
rdmCorrect *= 5;

document.getElementById('lockpick').addEventListener('input', function() {
    var lockpickValue = document.getElementById('lockpick').value;
    var correctValue = rdmCorrect;

    var proximity = Math.abs(lockpickValue - correctValue);

    var indicator = document.getElementById('indicator');
    console.log(lockpickValue);
    if (proximity <= 5) {
        indicator.style.backgroundColor = "#27ae60";
    } else if (proximity <= 20) {
        indicator.style.backgroundColor = "#f39c12";
    } else {
        indicator.style.backgroundColor = "#e74c3c";
    }
});

document.getElementById('submit').addEventListener('click', function() {
    var lockpickValue = document.getElementById('lockpick').value;
    var correctValue = rdmCorrect;

    if (lockpickValue == correctValue) {
        window.location.href = "https://fauza.fr";
    } else {
        alert("Try again!");
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }