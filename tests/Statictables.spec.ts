import{test,expect,Locator} from "@playwright/test";
test("static tables", async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
const table:Locator=page.locator("table[name='BookTable'] tbody ");
await expect(table).toBeVisible();
// add the rews locator count number of the rows
const rows:Locator=page.locator("table[name='BookTable'] tbody tr ");

await expect(rows).toHaveCount(7);// apraocah1  with out finding the count

const rowcount:number=await rows.count();
console.log("Row count" , rowcount);
expect (rowcount).toBe(7);//approach2
// count the no of colouns 

const column:Locator=rows.locator("th"); // finr the column locator
await expect(column).toHaveCount(4);// verify vount wit out count

const columncount:number=await column.count()// move the column locator in the variable to finr the count
console.log("columncount is" , columncount)
 expect(columncount).toBe(4);

 // i want data from 2 row to display
     const seconddata:Locator =rows.nth(2).locator('td')// chaining the locator of row and adding the
     //  2 locaotr to the seconddata variable
     //  it will return only locator


     // now we need theretrive the data from the locator to the variable

     const realdata:string =await seconddata.allTextContents();
  console.log("secondror data" , realdata)

  const data:string[]=(await seconddata.allTextContents()).map(text=> text.trim());

   



})