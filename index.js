// credit Nael
var randomNumber = Math.floor(Math.random() * 100) + 1;
var gjetning = document.querySelector('.gjetning');
var sistResultat = document.querySelector('.sistResultat');
var LavEllerHøy = document.querySelector('.LavEllerHøy');
var gjettSubmit = document.querySelector('.gjettSubmit');
var field = document.querySelector('.field');
var guessCount = 1;
var resetButton;
field.focus();
function checkGuess() {
    var userGuess = Number(field.value);
    if (guessCount === 1) {
        gjetning.textContent = 'Forrige gjetninger: ';
    }
    gjetning.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        sistResultat.textContent = 'Gratulerer! Du fikk riktig svar!';
        sistResultat.style.backgroundColor = 'green';
        LavEllerHøy.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        sistResultat.textContent = 'Spill Over!';
        LavEllerHøy.textContent = '';
        setGameOver();
    } else {
        sistResultat.textContent = 'Feil!';
        sistResultat.style.backgroundColor = 'blue';
        if (userGuess < randomNumber) {
            LavEllerHøy.textContent = 'Forrige gjetning var for lav!';
        } else if (userGuess > randomNumber) {
            LavEllerHøy.textContent = 'Forrige gjetning var for høy!';
        }
    }
    guessCount++;
    field.value = '';
    field.focus();
}
gjettSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    field.disabled = true;
    gjettSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start nytt spill';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultat p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    field.disabled = false;
    gjettSubmit.disabled = false;
    field.value = '';
    field.focus();
    sistResultat.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

