// Creates a new instance of Calculator class before each 'it' spec inside any describe (global)
beforeEach(function() {
        this.calculator = new Calculator();
    });

afterAll(function() {
    calculator = new Calculator();
    console.log("New clac created"); // test
})

describe("Calculator", function() {
    
    describe("number tests", function() {
        it("inital variables and output displays are correct", function() {
            expect(this.calculator).toBeDefined();
            expect(this.calculator.currentOperand).toEqual(0);
            expect(output.textContent).toEqual("0");
        });

        it("appends number values to current operand and output DOM element correctly", function() {
            expect(this.calculator.append).toBeDefined();
            // "0" does not append to current output of 0
            this.calculator.append("0");
            expect(this.calculator.currentOperand).toEqual(0);
            expect(output.textContent).toEqual("0");
            this.calculator.append("4");
            expect(this.calculator.currentOperand).toEqual(4);
            expect(output.textContent).toEqual("4");
            this.calculator.append("5");
            expect(this.calculator.currentOperand).toEqual(45);
            expect(output.textContent).toEqual("45")
            // "." only appends once to existing output
            this.calculator.append(".");
            expect(this.calculator.currentOperand).toEqual(45);
            expect(output.textContent).toEqual("45.");
            this.calculator.append(".");
            expect(this.calculator.currentOperand).toEqual(45);
            expect(output.textContent).toEqual("45.");
            this.calculator.append("0");
            this.calculator.append("9");
            this.calculator.append(".");
            expect(this.calculator.currentOperand).toEqual(45.09);
            expect(output.textContent).toEqual("45.09");
        })
    })

    describe("addition tests", function() {
        // it("addition function exists", function() {
        //     expect(calculator.add).toBeDefined();
        // });
    });
});