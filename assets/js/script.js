const choicesArray = ['pierre', 'feuille', 'ciseaux'];
let idButton = document.getElementById("myButton");
let playerArray = document.getElementsByTagName("input");
let battleResult = document.getElementById("viewResult");
let idPlayerScore = document.getElementById('playerScore');
let idIAScore = document.getElementById('IAScore');
let playerScore = 0;
let IAScore = 0;

let playerChoice;
let IAchoice;

function randomIAchoice() {
    return Math.floor(Math.random() * 3);
}

function showPlayerChoice() {
    for (i = 0; i < playerArray.length; i++) {
        if (playerArray[i].checked) {
            return playerArray[i].value;
        }
    }
}

function battle() {
    IAchoice = randomIAchoice();
    playerChoice = showPlayerChoice();

    if (IAchoice == playerChoice) {
        battleResult.textContent = 'EGALITE  ' + '( ' + choicesArray[playerChoice] + ' / ' + choicesArray[IAchoice] + ' )';

    } else if ((playerChoice == 0 && IAchoice == 2) || (playerChoice == 1 && IAchoice == 0) || (playerChoice == 2 && IAchoice == 1)) {
        battleResult.textContent = 'GAGNE  ' + '( ' + choicesArray[playerChoice] + ' / ' + choicesArray[IAchoice] + ' )';
        idPlayerScore.textContent = playerScore += 1;
        
    } else {
        battleResult.textContent = 'PERDU  ' + '( ' + choicesArray[playerChoice] + ' / ' + choicesArray[IAchoice] + ' )';
        idIAScore.textContent = IAScore += 1;
    }
}