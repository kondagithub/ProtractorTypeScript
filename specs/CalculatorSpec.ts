import { CalculatorPage } from "./CalculatorPage";

describe("Calculator add two numbers feature", function() {
    
    let calculatorPage  = new CalculatorPage();

    it("Access calculator page", function(){
        calculatorPage.get("https://juliemr.github.io/protractor-demo/");
    });

    it("Verify page title", function(){
        calculatorPage.verifyCalculatorTitle();
    });

    it("Add two numbers", function(){
        calculatorPage.inputFirstValue(10);
        calculatorPage.inputSecondValue(2);
        calculatorPage.clickGoButton();
    })

})