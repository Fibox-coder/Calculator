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

// document.addEventListener('keypress', (event) => {
//     input = event.key
//     console.log(input)
// })

let totalInput = ""
let firstInput = 0
let input = 0
let activatedButton = ""

startCalculation()

function startCalculation(){
    buttons.forEach((button) =>
        button.addEventListener(('click'), () =>{
            input = button.id

            switch(button.id){

                case "decimalBtn":
                    let char = "."
                    if (totalInput.includes(char)){
                        return
                    }
                    if (totalInput === ""){
                        totalInput = 0
                    }
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
                    if (totalInput === ""){
                        return
                    } else {
                        stringToNumber()
                        if (activatedButton === ""){
                            addBtn(firstInput, totalInput)
                        } else {
                           calculationAfter(firstInput, totalInput)
                        }
                        activatedButton = " + "
                        calculationResult.textContent = firstInput + activatedButton;
                    }
                    break;

                case "subtractBtn":
                    if (totalInput === ""){
                        return
                    } else{
                        stringToNumber()
                        if (activatedButton === ""){
                            subtractBtn(firstInput, totalInput)
                        } else {
                            calculationAfter(firstInput, totalInput)
                        }
                        activatedButton = " - "
                        calculationResult.textContent = firstInput + activatedButton;  
                    } 
                    break;

                case "multiplyBtn":
                    if (totalInput === ""){
                        return
                    } else{
                        stringToNumber()
                        if (activatedButton === ""){
                            multiplyBtn(firstInput, totalInput)
                        } else {
                            calculationAfter(firstInput, totalInput)
                        }
                        activatedButton = " * "
                        calculationResult.textContent = firstInput + activatedButton;
                    }
                    break;

                    case "divisionBtn":
                        if (totalInput === "" || totalInput === 0){
                            return
                        } else{
                    stringToNumber()
                    if (activatedButton === ""){
                        divisionBtn(firstInput, totalInput)
                    } else {
                    calculationAfter(firstInput, totalInput)
                    }
                    activatedButton = " / "
                    calculationResult.textContent = firstInput + activatedButton;
                }
                    break;

                case "resultBtn":
                    stringToNumber()
                    resultBtn(firstInput, totalInput)
                    
                    if(totalInput.toString().length >= 15){
                        inputResult.style.cssText = "font-size: 30px;"
                    } else{
                        inputResult.style.cssText = "font-size: 40px"
                    }
                    break;
                        
                default: 
                if (totalInput.length === 10){
                    break;
                } else{
                    totalInput = totalInput + input 
                    break;
                }
            }

            if (totalInput.length == 0){
                inputResult.textContent = "0";
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
    totalInput = a + b
}   else if(activatedButton === " - "){
    calculationResult.textContent = firstInput + activatedButton + totalInput;
    totalInput = a - b 
}   else if(activatedButton === " * "){
    calculationResult.textContent = firstInput + activatedButton + totalInput;
    totalInput = a * b 
}   else if(activatedButton === " / "){
    calculationResult.textContent = firstInput + activatedButton + totalInput;
    totalInput = a / b 
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
    calculationResult.style.cssText = "visibility: inherit;"
}

function subtractBtn(a, b){
    if (firstInput > 0 || firstInput < 0){
        firstInput = a - b
        totalInput = ""
    } else {
        firstInput = totalInput
        totalInput = ""
    }
    calculationResult.style.cssText = "visibility: inherit;"

}

function multiplyBtn(a, b){
    if (firstInput > 0 || firstInput < 0){
        firstInput = a * b
        totalInput = ""
    } else {
        firstInput = totalInput
        totalInput = ""
    }
    calculationResult.style.cssText = "visibility: inherit;"
}

function divisionBtn(a, b){
    if (firstInput > 0 || firstInput < 0){
        firstInput = a / b
        totalInput = ""
    } else {
        firstInput = totalInput
        totalInput = ""
    }
    calculationResult.style.cssText = "visibility: inherit;"
}



function calculationAfter(a, b){
    if(activatedButton === " + "){     
        addBtn(a, b)
        activatedButton === ""
    } else if(activatedButton === " - "){
        subtractBtn(a, b)
        activatedButton === ""
    } else if(activatedButton === " * "){
        multiplyBtn(a, b)
        activatedButton === ""
    } else if(activatedButton === " / "){
        divisionBtn(a, b)
        activatedButton === ""
    }
}

function stringToNumber(){
    if (totalInput.length == 0){
        return inputResult.textContent = "0";
    } else {
        inputResult.textContent = totalInput;
        totalInput = parseFloat(totalInput)
        firstInput = parseFloat(firstInput)
    }
}

