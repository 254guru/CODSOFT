let displayValue = '';
let operator = '';
let firstOperand = '';
let operationHistory = '';

function appendToDisplay(value) {
  displayValue += value;
  operationHistory += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  operator = '';
  firstOperand = '';
  operationHistory = '';
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  if (displayValue !== '') {
    firstOperand = parseFloat(displayValue);
    operationHistory += ' ' + operator + ' ';
    displayValue = '';
  }
}

function calculateResult() {
  if (operator !== '' && displayValue !== '') {
    const secondOperand = parseFloat(displayValue);
    let result;
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
    }
    displayValue = result.toString();
    operationHistory += ' ' + secondOperand + ' = ' + result;
    operator = '';
    firstOperand = '';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
  document.getElementById('operation-history').textContent = operationHistory;
}