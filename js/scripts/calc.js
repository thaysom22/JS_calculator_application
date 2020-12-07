/**
 * addCommas takes a string representing an number w/o commas
 * returns a string formatted with thousand comma separators
*/
function addCommas(nStr) {
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(nStr)) {
        nStr = nStr.replace(rgx, '$1' + ',' + '$2');
    }
    return nStr;
}

class Calculator {
    constructor() {
        this.currentOperand = 0;
        this.previousOperand = 0;
        this.activeOperation = false;
        this.decimalCheck = false;
        this.outputString = "0"
        output.textContent = this.outputString;
    }

    append(number) {
        if (number === ".") {
            if (this.decimalCheck) { return; };
            this.decimalCheck = true;
            this.outputString += number; 
        } else if (this.decimalCheck) {
            this.outputString += number;
            this.currentOperand = parseFloat(this.outputString.replace(/,{1}/g, '')); // glovbal flag to match all commas
        } else {
            if (this.outputString.length >= 3) {
                this.outputString =  addCommas(this.currentOperand + number); // use currentOperand as it has no existing commas
                console.log(this.outputString); // test  
            } else {
                this.outputString = this.currentOperand ? this.outputString + number : number; // avoid leading zero for integer outputs 
                console.log(this.outputString); // test 
            }
            this.currentOperand = parseFloat(this.currentOperand + number);
            console.log(this.currentOperand); // test    
        };
        
        // update DOM using outputString variable
        output.textContent = this.outputString; 
    }

    operation() {
       this.previousOperand = this.currentOperand; 
       this.activeOperation = !this.activeOperation; 
       this.currentOperand = 0;
    }


}


// Select button types
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const functionButtons = document.querySelectorAll("[data-function]");
const calculateButton = document.querySelector("[data-calculate]")

// Select output element
let output = document.querySelector("[data-output]");

// Create new calculator instance 
let calculator = new Calculator()

// Add number to output on click
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.textContent);
        
    });
});

