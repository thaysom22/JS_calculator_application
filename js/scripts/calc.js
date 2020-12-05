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
            this.outputString = this.currentOperand + number; // concat of number type and string type returns string type
        } else if (this.decimalCheck) {
            this.outputString += number; 
            } else {
            this.outputString = this.currentOperand ? this.outputString + number : number; // avoid leading zero for integer outputs
            };
       
        this.currentOperand = parseFloat(this.outputString);
        output.textContent = this.outputString;
        console.log(this.currentOperand); // test
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

