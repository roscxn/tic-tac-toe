const choice1 = document.getElementById('1');
const choice2 = document.getElementById('2');
const choice3 = document.getElementById('3');
const choice4 = document.getElementById('4');
const choice5 = document.getElementById('5');
const choice6 = document.getElementById('6');
const choice7 = document.getElementById('7');
const choice8 = document.getElementById('8');
const choice9 = document.getElementById('9');

const possibleChoices = [choice1,choice2,choice3,choice4,choice5,choice6,choice7,choice8,choice9];
let comChoice = Math.floor(Math.random() * 9) + 1;

choice1.addEventListener('click', function() {
    choice1.innerText = "X";
    if (comChoice !== 1);
    // for (let i = 1; i < 9;) {
    possibleChoices[comChoice].innerText = "O";
    // }
});

choice2.addEventListener('click', function() {
    choice2.innerText = "X";
    if (comChoice !== 2);
    possibleChoices[comChoice].innerText = "O";
});

choice3.addEventListener('click', function() {
    choice3.innerText = "X";
    if (comChoice !== 3);
    possibleChoices[comChoice].innerText = "O";
});

choice4.addEventListener('click', function() {
    choice4.innerText = "X";
    if (comChoice !== 4);
    possibleChoices[comChoice].innerText = "O";
});

choice5.addEventListener('click', function() {
    choice5.innerText = "X";
    if (comChoice !== 5);
    possibleChoices[comChoice].innerText = "O";
});

choice6.addEventListener('click', function() {
    choice6.innerText = "X";
    if (comChoice !== 6);
    possibleChoices[comChoice].innerText = "O";
});

choice7.addEventListener('click', function() {
    choice7.innerText = "X";
    if (comChoice !== 7);
    possibleChoices[comChoice].innerText = "O";
});

choice8.addEventListener('click', function() {
    choice8.innerText = "X";
});

choice9.addEventListener('click', function() {
    choice9.innerText = "X";
});

