const rl = require('readline-sync');

let num1 = rl.questionInt('Enter first number: ');
let num2 = rl.questionInt('Enter second number: ');
let operator = rl.question('Enter operator (+, -, *, /): ');

let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        console.log('Invalid operator');
        process.exit(1);
        break;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);