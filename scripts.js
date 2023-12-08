"use strict";

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let num1;
let num2;
let operator;
let answer;

function operate(operator, num1, num2) {
    if (operator === 'add') {
       answer =  add(num1, num2);
    } else if (operator === 'subtract') {
        answer = subtract(num1, num2);
    } else if (operator === 'multiply') {
        answer =  multiply(num1, num2);
    } else if (operator === 'divide') {
        answer = divide(num1, num2);
    }
}

const content = document.querySelector('.content');
let lastClickedBtnId = '';
let lastClickedBtn = '';
let lastClickedBtnInner = '';

//adds event listener to all buttons and shows last pressed
content.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    lastClickedBtnId = (event.target.id);
    lastClickedBtn = (event.target);
    lastClickedBtnInner = (event.target.innerHTML);
} );

let display = document.querySelector('.display');
function clearDisplay() {
    display.innerHTML = '';  
}


const digits = document.querySelectorAll('.digit');
digits.forEach(function(digitBtn) {
    digitBtn.addEventListener('click', function() {
        if (operatorCheck() && lastClickedBtnIsOperatorCheck()) {
            clearDisplay();

        }
        display.innerHTML += digitBtn.innerHTML;
    })
});

function lastClickedBtnIsOperatorCheck() {
    return (lastClickedBtnId === 'add'||lastClickedBtnId === 'subtract'||lastClickedBtnId === 'multiply'||lastClickedBtnId === 'divide'||lastClickedBtnId === 'equals'); 
}


function operatorCheck() {
    return (operator === 'add' 
    || operator === 'subtract' 
    || operator === 'multiply' 
    || operator === 'divide')
}

const operators = document.querySelector('.operator-pad');

operators.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    } else if (operatorCheck()) {
                calculate();
                num1 = +display.innerHTML;
                operator = event.target.id;
                return;
            }
    num1 = +display.innerHTML;
    operator = event.target.id;
});

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', function() {
    calculate();
    num1 = +display.innerHTML;
    operator = '';
} );

function calculate() {
    num2 = +display.innerHTML;
    console.log(num1);
    console.log(operator);
    console.log(num2);
    clearDisplay();
    operate(operator, num1, num2);
    display.innerHTML = answer;
    num1 = +answer;
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function() {
    clearDisplay();
    num1 ='';
    num2 ='';
    operator = '';
    answer = '';
});

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', function() {
    decimalBtnCheck() ? alert('ONLY ONE DECIMAL PLEASE!!') : display.innerHTML += '.';
});

function decimalBtnCheck() {
    return display.innerHTML.includes('.');
}