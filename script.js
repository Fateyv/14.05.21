const operator = getOperator();
const operands = getOperands('Enter operands separated by commas');
let result = getCalculation(operator);
let expression = operands.join(operator);
alert(`Your result : ${expression} = ${result}`);


function getOperator() {
    let answerOperator = '';
    do {
        answerOperator = prompt('Enter the operation you want to do (+ - / *)');
    } while (isOperatorInvalid(answerOperator));
    return answerOperator;
}

function isOperatorInvalid(answerOperator) {
    return (
        answerOperator !== '+' && 
        answerOperator !== '-' && 
        answerOperator !== '*' && 
        answerOperator !== '/'
    );
}

function getOperands(message) {
    let arr = '';
    do {
        arr = prompt(message);
    } while (isOperandsValid(arr));
    arr = arr.split(",");
    return arr.filter(Number).map(Number);
}

function isOperandsValid(arr) {
    return (
        arr === null || 
        arr === ''
    );
}

function getCalculation(operator) {
    calcResult = operands[0];
    for (let i = 1; i < operands.length; i++) {
        switch (operator) {
            case "+":
                calcResult = calcResult + operands[i];
                break;
            case "-":
                calcResult = calcResult - operands[i];
                break;
            case "*":
                calcResult = calcResult * operands[i];
                break;
            case "/":
                calcResult = calcResult / operands[i];
                break;
        }
    }
    return calcResult;
}