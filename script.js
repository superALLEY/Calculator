let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperation) {
        secondOperand = parseFloat(currentInput);
        firstOperand = operate(firstOperand, secondOperand, currentOperation);
    }
    currentOperation = operation;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    if (firstOperand === null || currentInput === '') return;
    secondOperand = parseFloat(currentInput);
    currentInput = operate(firstOperand, secondOperand, currentOperation).toString();
    firstOperand = null;
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function toggleSign() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function percent() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || firstOperand || '0';
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                alert("Division par zéro impossible");
                return 0;
            }
            return a / b;
        default:
            return b;
    }
}
