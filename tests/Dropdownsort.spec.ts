
//verify the soring of values in a drop down" we take 2 array 1 is orignal array and 
//second 1 is sorted array. firest we need to capture the elements in to original array
import{test,expect,Locator} from"@playwright/test";

test("Sorted drop down ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

   const DPoptions :Locator=page.locator('#colors > option');
   //moving and trimimg the values in to one array called OPTarrray
    const OPTarray:string[]=(await DPoptions.allTextContents()).map(text=>text.trim());
    //optionala array  move tooriginal array
    const originalarray:string[]=[...OPTarray]
    //sort the optional array and moveto anothe array
    const sortarray:string[]=[...OPTarray].sort();// in arrays sort is mutable 
    // means that sort the original array also to sole this we  spread operator ...
    console.log("original list" , originalarray);
    console.log("SOrted List" ,sortarray);
    await page.waitForTimeout(5000)

    //await page.waitForTimeout(5000);
})