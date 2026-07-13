// 1.Input Text box Action

import{test,expect,Locator} from "@playwright/test";
test( "PWActions", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
 const ITB: Locator =page.locator('#name');
 await expect(ITB).toBeVisible();
 await expect(ITB).toBeEnabled();
 
 const MAxL :any =await ITB.getAttribute("maxlength");// return the value to the elementMAxL
  expect(MAxL).toBe('15');
  await ITB.fill("ravikumar");
  await page.waitForTimeout(5000);

});

//check radio button 
test("Radio button actions",async({page})=>{
    await page .goto("https://testautomationpractice.blogspot.com/")
  const RB: Locator=  page.locator('#male');
  await expect(RB).toBeVisible();
  await expect(RB).toBeEnabled();
expect(await RB.isChecked()).toBe(false)// validating tht it should be false
 await RB.check(); // method for checking
//expect(await RB.isChecked()).toBe(true)// validating tht it should be false
await expect(RB).toBeChecked();// usingsing assertion this is priority and preferable

  await page.waitForTimeout(5000)

}) 

//check boxes functions

test("Checkbox Actions",async({page})=>{
 await page .goto("https://testautomationpractice.blogspot.com/")
 /*const CB :Locator = page.getByLabel('Sunday');// using Betbylable locator
  await CB.check();// clect the check bpx method
  await expect(CB).toBeChecked(); // assertion for checked or not */
 // await page.waitForTimeout(7000);

// capture all check bboxes using mapfunction in array

 const days:string[]=[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday','Saturday', 'Sunday']
const CBS :Locator[]= days.map(ind =>page.getByLabel(ind)); 
expect(CBS.length).toBe(7);

//selct all the checkbxes

for(const ACB of CBS){

    await ACB.check();
    await expect(ACB).toBeChecked();
}
  //await page.waitForTimeout(7000);

  //  to uncheck last 3 checkboxes -use for of loop

  for( const UCB of CBS.slice(-3)) // use slice method  to capture last 3 element indexes
{

 await UCB.uncheck()
 await expect(UCB).not.toBeChecked();
}

// unselect the checked boxes and select the check boxes which are not selected


await page.waitForTimeout(7000);
})