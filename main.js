const clearButton = document.querySelector('#clearBtn');        // Clear
const deleteButton = document.querySelector('#deleteBtn');      // Delete
const divisionButton = document.querySelector('#divisionBtn');  // ÷
const multiplyButton = document.querySelector('#multiplyBtn');  // x
const subtractButton = document.querySelector('#subtractBtn');  // -
const addButton = document.querySelector('#addBtn');            // +
const decimalButton = document.querySelector('#decimalBtn');    // .
const resultButton = document.querySelector('#resultBtn');      // =
const inputResult = document.querySelector('#input')
const calculationResult = document.querySelector('#calculation')
const buttons = document.querySelectorAll(".button")

let totalInput = ""
let firstInput = 0
let secondInput = 0
let input = 0
let activatedButton = ""

startCalculation()

function startCalculation(){
    buttons.forEach((button) =>
        button.addEventListener(('click'), () =>{
            input = button.id
            switch(button.id){
                case "decimalBtn":
                    totalInput = totalInput + "."
                    inputResult.textContent = totalInput;
                    break;

                case "clearBtn":
                    clearBtn()
                    break;

                case "deleteBtn":
                    deleteBtn()
                    break;

                case "addBtn":
                    totalInput = parseFloat(totalInput)
                    addBtn(firstInput, totalInput)
                    break;

                case "subtractBtn":
                    totalInput = parseFloat(totalInput)
                    subtractBtn(firstInput, totalInput)
                    break;

                case "resultBtn":
                    totalInput = parseFloat(totalInput)
                    resultBtn(firstInput, totalInput)
                    break;
                        
                default: 
                    totalInput = totalInput + input 
                    break;
            }
            if (totalInput.length == 0){
                return inputResult.textContent = "0";
            } else {
                inputResult.textContent = totalInput;
            }

            return totalInput
        })
    )
}

function clearBtn(){
    window.location.reload()
}

function deleteBtn(){
    totalInput = totalInput.slice(0, -1)
}

function resultBtn(a, b){
    if(activatedButton === " + "){
    calculationResult.textContent = firstInput + activatedButton + totalInput;
    activatedButton = ""
    totalInput = a + b
}   else if(activatedButton === " - "){
    calculationResult.textContent = firstInput + activatedButton + totalInput;
    activatedButton = ""
    totalInput = a - b 
}


    firstInput = 0
}   

function addBtn(a, b){
    if (firstInput > 0 || firstInput < 0){
        firstInput = a + b
        totalInput = ""
    } else {
        firstInput = totalInput
        totalInput = ""
    }
calculationResult.textContent = firstInput + " +";
calculationResult.style.cssText = "visibility: inherit;"
activatedButton = " + "
}

function subtractBtn(a, b){
    if (firstInput > 0 || firstInput < 0){
        firstInput = a - b
        totalInput = ""
    } else {
        firstInput = totalInput
        totalInput = ""
    }
calculationResult.textContent = firstInput + " -";
calculationResult.style.cssText = "visibility: inherit;"
activatedButton = " - "
}