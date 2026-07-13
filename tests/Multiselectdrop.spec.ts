//Multi select dropdown or listbox 

import{test,expect,Locator }from "@playwright/test";

test("Multiselect drop down", async({page})=>{

    await page .goto("https://testautomationpractice.blogspot.com/")
   await page.locator('#colors').selectOption(['Red','Blue','Green']);//using visible text
    await page.locator('#colors').selectOption(['red','green','white']);//by using value attribute
    //await page.locator('#country').selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]);//by using label
    await page.locator('#country').selectOption([{index:0},{index:2}]); //by using index
    await page.waitForTimeout(7000);
})