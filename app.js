// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const boulderButton = document.getElementById('boulder-button');
const treeButton = document.getElementById('tree-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.ceil(Math.random() * 3);
    
    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    correctHidingPlaceEl.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses--;
    }

    totalGuesses = totalEl.textContent;
    correctGuesses = winsEl.textContent;

}

function resetStyles() {
shedContainer.classList.remove('face');
treeContainer.classList.remove('face');
boulderContainer.classList.remove('face');
}

function setStyles() {
    shedContainer.classList.add('face');
    treeContainer.classList.add('face');
    boulderContainer.classList.add('face');
}

shedButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'shed');  
});

treeButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'tree');  
});

boulderButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'boulder');  
});
