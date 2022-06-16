// this is where the result is displayed
const resultField = document.getElementById('resultField');

// here we memorize what was in the result field before the user selected an operation 
let previousResult = '0';

// + - * or / depending on what operation the user has selected
let selectedOperation = null;

const numberButtons = document.getElementsByClassName('button-number');
const operationButtons = document.getElementsByClassName('button-operation');
const resetButton = document.getElementById('button-reset');
const evaluationButton = document.getElementById('button-evaluate');

for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', handleNumberButtonClick);
}

for (const operationButton of operationButtons) {
    operationButton.addEventListener('click', handleOperationButtonClick);
}

resetButton.addEventListener('click', handleResetButtonClick);

evaluationButton.addEventListener('click', handleEvaluateButtonClick);

// Will do nothing if result is 0 and selected number is 0
// otherwise will append a number to the current result field value
function handleNumberButtonClick(event) {
    const selectedNumber = event.target.innerText;

    if (resultField.value === "0") {
        if (selectedNumber === "0") {
            return;
        }

        resultField.value = selectedNumber;
    } else {
        resultField.value = resultField.value.concat(selectedNumber);
    }
}

// reset all the values to their initial state
function handleResetButtonClick () {
    resultField.value = '0';
    previousResult = '0';
    selectedOperation = null;
}

// if we've started putting in a new number - do nothing
// otherwise - memorize the current result field value to previousResult
// and memorize the selectedOperation
// set the result field value to 0 in order to allow the user to start typing from scratch
function handleOperationButtonClick(event) {
    if (selectedOperation !== null && resultField.value !== '0') {
        return;
    }

    selectedOperation = event.target.innerText;
    previousResult = resultField.value;
    resultField.value = '0';
}

// if we haven't selected an operation - do nothing
function handleEvaluateButtonClick () {
    if (selectedOperation === null) {
        return;
    }

    // get numbers out of strings
    // (can be float because of division)
    const firstOperand = Number.parseFloat(previousResult);
    const secondOperand = Number.parseFloat(resultField.value);

    // perform the actual operation on both current and memorized (previousResult) values
    switch (selectedOperation) {
        case '+':
            resultField.value = firstOperand + secondOperand;
            break;
        case '-':
            resultField.value = firstOperand - secondOperand;
            break;
        case '*':
            resultField.value = firstOperand * secondOperand;
            break;
        case '/':
            resultField.value = firstOperand / secondOperand;
            break;
        default:
            throw 'Unknown operation';
    }

    // allow user to select a new operation by resetting the selected Operation
    selectedOperation = null;
    previousResult = '0';
}
