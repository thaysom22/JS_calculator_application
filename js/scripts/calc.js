class Calculator {
    constructor() {
        this.currentOperand = 0;
        this.previousOperand = 0;
        this.activeOperation = false;
        // Test
        console.log("calculator instance created");
    }

    append(number) {
        let outputString = this.currentOperand ? this.currentOperand + number : number; // avoid leading zero. concat of number type and string type returns string type
        this.currentOperand = parseFloat(outputString);
        output.textContent = outputString;
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

