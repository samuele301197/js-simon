const numbersDiv = document.getElementById('numbers');
const inputsDiv = document.getElementById('inputs');
const resultDiv = document.getElementById('result');
const timerDiv = document.getElementById('timer');
const checkBtn = document.getElementById('checkBtn');

// Genera 5 numeri casuali univoci tra 1 e 99 usando un ciclo for
const generatedNumbers = [];
for (let i = 0; generatedNumbers.length < 5; i++) {
  const num = Math.floor(Math.random() * 99) + 1;
  if (!generatedNumbers.includes(num)) {
    generatedNumbers.push(num);
  }
}

numbersDiv.innerText = "Numeri: " + generatedNumbers.join(' - ');

// Timer di 30 secondi
let seconds = 30;
const interval = setInterval(() => {
  timerDiv.innerText = `Tempo rimanente: ${seconds}s`;
  if (seconds <= 0) {
    clearInterval(interval);
    showInputs();
  }
  seconds--;
}, 1000);

function showInputs() {
  numbersDiv.style.display = 'none';
  timerDiv.style.display = 'none';
  inputsDiv.style.display = 'block';
  checkBtn.style.display = 'inline';

  for (let i = 0; i < 5; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 1;
    input.max = 99;
    inputsDiv.appendChild(input);
  }
}

checkBtn.addEventListener('click', () => {
  const userInputs = Array.from(inputsDiv.querySelectorAll('input')).map(input => parseInt(input.value));
  const correct = userInputs.filter(num => generatedNumbers.includes(num));
  const uniqueCorrect = [...new Set(correct)];
  resultDiv.innerText = `Hai indovinato ${uniqueCorrect.length} numeri: ${uniqueCorrect.join(', ')}`;
  checkBtn.disabled = true;
});