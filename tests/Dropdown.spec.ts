//Dropdown actions  capture the data in the dropwown
import{test,expect,Locator} from "@playwright/test";
test("Dropdown",async({page})=>{

    await page .goto("https://testautomationpractice.blogspot.com/");
   /* await page.locator('#country').selectOption('india');//using visible text
    await page.locator('#country').selectOption({value: 'uk'});//by using value attribute
    await page.locator('#country').selectOption({label:'India'});//by using label
    await page.locator('#country').selectOption({index:3}); //by using index
    await page.waitForTimeout(7000);*/


    //count the dropdown values count - using csslocators
  const DP:Locator =  page.locator('#country>option');// get all options in the country dropdown
   await expect(DP).toHaveCount(10);// perform count validation
//check all  available options in drop down check  ex to check japan is there 
//but above only lodaor are thre in the variable. for this we nedd to move the data in to array 
//we need to trim the daya and move them in to  OPT array

const AOP : string[]= (await DP.allTextContents()).map(text=>text.trim());// elements stored 
// in array ariable through map
//console.log(AOP);

expect(AOP).toContain('Japan');

//to print data in text format not array format
 for(const TT of AOP)
 {
    console.log(TT)
 }


   await page.waitForTimeout(5000)



})