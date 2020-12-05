// Creates a new instance of Calculator class before each 'it' spec
beforeEach(function() {
        var calculator = new Calculator();
        output.textContent = "";
    });

describe("A calculator", function() {
    
    describe("number button tests", function() {
        it("appends numbers to current operand and output DOM element correctly", function() {
            expect(calculator.append).toBeDefined();
            calculator.append("4");
            expect(calculator.currentOperand).toBe(4);
            expect(output.textContent).toBe("4");
            calculator.append("5");
            expect(calculator.currentOperand).toBe(45);
            expect(output.textContent).toBe("45")
            // "." only appends once to existing output
            calculator.append(".");
            expect(calculator.currentOperand).toBe(45);
            expect(output.textContent).toBe("45.");
        })
    })

    describe("addition tests", function() {
        // it("addition function exists", function() {
        //     expect(calculator.add).toBeDefined();
        // });
    });
});