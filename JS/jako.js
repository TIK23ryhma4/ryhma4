const selectElements = document.querySelectorAll('select');
const checkButton = document.getElementById('submit');
const correctDisplay = document.getElementById('correct');
const incorrectDisplay = document.getElementById('incorrect');


let correctAnswers = 0;
let incorrectAnswers = 0;


checkButton.addEventListener('click', () => {
    selectElements.forEach(selectElement => {
        const selectedOption = selectElement.value;
        if (selectedOption === 'right') {
            correctAnswers++;
        } else if (selectedOption === 'wrong') {
            incorrectAnswers++;
        }
    });

    correctDisplay.textContent = correctAnswers;
    incorrectDisplay.textContent = incorrectAnswers;

    correctAnswers = 0;
    incorrectAnswers = 0;
});
