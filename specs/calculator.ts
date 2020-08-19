import { browser, element, by } from "protractor"

describe("Calculator", function(){

  beforeEach(function(){
      browser.get("https://juliemr.github.io/protractor-demo/");
  })

  it("Launch url check", function(){
      expect(browser.getTitle()).toContain("Super");
  })

  it("Add 2 numbers", function(){
      element(by.model("first")).sendKeys("12");
      element(by.model("second")).sendKeys("13");
      element(by.id("gobutton")).click();
      browser.sleep(5000)
      // expect<any>(element(by.xpath("//table/tbody/tr[1]/td[3]"))).toEqual('25');
  })
})