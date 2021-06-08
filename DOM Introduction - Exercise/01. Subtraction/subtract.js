function subtract() {
    let firstInputElement = document.getElementById('firstNumber');
    let secondInputElement =document.getElementById('secondNumber');
let num1 = firstInputElement.value;
let num2 = secondInputElement.value;
    let resultElement = document.getElementById('result');
let result = num1 - num2
resultElement.textContent = result;
    

}