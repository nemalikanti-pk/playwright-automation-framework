//usisng xpath locators verify  theimage logo

import{test,expect,Locator} from "@playwright/test";
test("XpathLoco", async({page})=>
{
 await page.goto("https://demowebshop.tricentis.com/");

 //1.using relative xpath 

 const logo1:Locator =page.locator(" //img[@alt='Tricentis Demo Web Shop']");

 await expect(logo1).toBeVisible();


 //2 Absolute Xpath Locator 
const logo2:Locator =page.locator(" //html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");

 await expect(logo2).toBeVisible();

 //3. xpath with Contains method used for locate the group elements

 const products: Locator=page.locator("//h2//a[contains(@href, 'computer')]");

    products.count(); // reurn the count of the products
     const productcount:number=await products.count()

     console.log(" No of the products is " ,productcount);

     expect(productcount).toBeGreaterThan(0);

})