const operator = getOperator();
const operands = getOperands('Enter operands separated by commas');
let result = getCalculation(operator, operands);
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
    return arr.map(Number).filter(Number.isFinite);
}

function isOperandsValid(arr) {
    return (
        arr === null || 
        arr === ''
    );
}

function getCalculation(operator, operands) {
    let calcResult = 0;
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