
//Built in locators
 /*
 page.getByRole()
 page.getbyText()
 page.getbyAltText()
 page.getByTitle()
 page.getByPlaceholde()
 page.getByTestid
 page.getBylabel()*/

//Example1
/*import{test,expect, Locator} from "@playwright/test";
 test("locators demo", async({page})=>{

    await page.goto("https://demo.nopcommerce.com/")

    //use getByAltText() locator: which is used for identifing
    //the images based o alt attributes img and area tags

    const logo:Locator=page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();
    // 2.getByText() builtin loctors

    // find n element it contains text.
    //we use this locator to find non interactive elements
    //like  div,span,h,p,
    //for promises we should use await 
    await expect(page.getByText("welcom to out store")).toBeVisible();

    //getByRole: if an element is interactive we use this lodcator
    // buttons checkbox,headers links, tables,
 })*/

   // Example2 for pageXOffset.getByAltText and pageXOffset.GetByText

   import{test,expect,Locator} from "@playwright/test";
   test("Locators demo", async({page})=>{
   await page.goto("https://demowebshop.tricentis.com/");
       const logo:Locator= page.getByAltText("Tricentis Demo Web Shop");
         
        await expect (logo).toBeVisible;
     
        //using getByText()
        /* const tit: Locator = page.getByText('Newsletter', { exact: true }); 
         await expect(tit).toBeVisible();*/



        // using Locators is the best prctice
  
   
/*await expect( page.locator('.block-newsletter .listbox span')
).toBeVisible(); this is failing because there are multiple spans are there in dom 
 but only 1 visible in the UI  . This is called  Stricy mode voilation error
 then we use below code*/

 
await expect(
  page.locator('.block-newsletter .listbox span', {
    hasText: 'Sign up for our newsletter'
  })
).toBeVisible();

 // page.getByRole


await page.getByRole("link",{name:'Register'}).click();
 await expect( page.getByRole("heading",{name:'Register'})).toBeVisible();

 //page.getLabels();
 await page.getByLabel('First name:').fill("Ravi ");
 await page.getByLabel('Last name:').fill("Nemalikanti");
 await page.getByLabel('Email:').fill("ravi.nemalikanti@gmail.com");

 await page.waitForTimeout(7000);
   })

  
    

   
     
