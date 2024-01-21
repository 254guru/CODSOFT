let display = document.getElementById('display');
let isOpenBracket = false;

function appendInput(value) {
  display.value += value;
}

function toggleBracket() {
  if (isOpenBracket) {
    display.value += ')';
  } else {
    display.value += '(';
  }
  isOpenBracket = !isOpenBracket;
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/sqrt/g, 'Math.sqrt').replace(/log/g, 'Math.log'));
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}