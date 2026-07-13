import{test,expect,Locator} from "@playwright/test";
test("alltextand innertext",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

const products: Locator= page.locator('.product-title');

const iproducts:string[]=(await products.allInnerTexts());
console.log(iproducts);
/*const aproducts:string[]=(await products.allTextContents());
const tproducts:string[]=await aproducts.map(text=>text.trim())
for(const at of tproducts)
{
console.log(at);
}*/

}

)