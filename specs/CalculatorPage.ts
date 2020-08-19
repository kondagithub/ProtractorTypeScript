import {browser, element, by} from "protractor"

export class CalculatorPage{

    firstElement = element(by.model("first"));
    secondElement = element(by.model("second"));
    goButton = element(by.id("gobutton"));

    constructor(){}

    get(url:string){
        browser.get(url);
    }

    verifyCalculatorTitle(){
        expect(browser.getTitle()).toContain("Super");
    }

    inputFirstValue(firstNumber:number) : void{
        this.firstElement.sendKeys(firstNumber);
    }

    inputSecondValue(secondNumber:number) : void{
        this.secondElement.sendKeys(secondNumber);
    }

    clickGoButton():void{
        this.goButton.click();
        browser.sleep(2000);
    }
}