import{test,expect} from "@playwright/test";

/*test("verify page title",async({page})=>{

   await page.goto("http://www.google.com");
 //  let  title:string=await page.title();
  // console.log("Title",title);
  // await expect(page).toHaveTitle("My Shop");



}


)*/

test("verify Second test",async({page})=>{
await page.goto("https://www.flipkart.com");
}
)