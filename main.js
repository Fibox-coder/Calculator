const clearButton = document.querySelector('#clearBtn');        // Clear
const deleteButton = document.querySelector('#deleteBtn');      // Delete
const divisionButton = document.querySelector('#divisionBtn');  // ÷
const multiplyButton = document.querySelector('#multiplyBtn');  // x
const subtractButton = document.querySelector('#subtractBtn');  // -
const addButton = document.querySelector('#addBtn');            // +
const decimalButton = document.querySelector('#decimalBtn');    // .
const resultButton = document.querySelector('#resultBtn');      // =
const resultScreen = document.querySelector('#resultScreen')
let buttons = document.querySelectorAll(".button")

let totalSum =[]
let totalInput = ""
let input = 0
console.log(totalSum)
startCalculation()

const add = function(array) {
    return array.reduce((total, current) => total + current, parseInt(totalSum))
};

const subtract = function(array) {
    return array.reduce((total, current) => total - current, totalSum)
};

const multiply = function(array) {
    return array.reduce((total, current) => total * current, totalSum)
};

const division = function(array) {
    return array.reduce((total, current) => total / current, totalSum)
};




function startCalculation(){
    buttons.forEach((button) =>
        button.addEventListener(('click'), () =>{
            input = button.id
            totalInput = totalInput + input 
            console.log(totalInput)
            resultScreen.textContent = totalInput;
            return parseInt(totalInput)
        })
    )
} 

