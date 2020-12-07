// Creates a new instance of Calculator class before each 'it' spec inside any describe (global)
beforeEach(function() {
        this.calculator = new Calculator();
    });

afterAll(function() {
    calculator = new Calculator(); // for manual testing after Jasmine texts have executed
    console.log("New calc created"); // test
})

describe("Calculator", function() {
    
    describe("output display tests", function() {
        
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

        it("displays commas in output and updates current operand correctly", function() {
            this.calculator.append("1");
            this.calculator.append("2");
            this.calculator.append("3");
            expect(this.calculator.currentOperand).toEqual(123);
            expect(output.textContent).toEqual("123");
            this.calculator.append("4");
            expect(this.calculator.currentOperand).toEqual(1234);
            expect(output.textContent).toEqual("1,234");
            this.calculator.append("5");
            this.calculator.append("6");
            this.calculator.append("7");
            expect(this.calculator.currentOperand).toEqual(1234567);
            expect(output.textContent).toEqual("1,234,567");

            // commas display correctly when output becomes decimal
            this.calculator.append(".");
            expect(this.calculator.currentOperand).toEqual(1234567);
            expect(output.textContent).toEqual("1,234,567.");
            this.calculator.append("0");
            expect(this.calculator.currentOperand).toEqual(1234567);
            expect(output.textContent).toEqual("1,234,567.0");
            this.calculator.append("0");
            expect(this.calculator.currentOperand).toEqual(1234567);
            expect(output.textContent).toEqual("1,234,567.00");
            this.calculator.append("8");
            expect(this.calculator.currentOperand).toEqual(1234567.008);
            expect(output.textContent).toEqual("1,234,567.008");
        })
    })

    describe("addition tests", function() {
        // it("addition function exists", function() {
        //     expect(calculator.add).toBeDefined();
        // });
    });
});