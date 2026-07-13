//verify duplicate test is there in the drop down or not


import{test,expect,Locator }from "@playwright/test";

test("Multiselect", async({page})=>{

    await page .goto("https://testautomationpractice.blogspot.com/")
    const dropdownlist:Locator = page.locator('#colors > option')// send the locatorto variable
    //we need to  trim the array items and move to one array= "opt "" using map
    const options:string[]=(await dropdownlist.allTextContents()).map(text=>text.trim());
    const myset = new Set<string>// creating set object not allowed duplicate
    const duplicate:string[]=[] // creating one srting array variable allowed duplicates

    for(const text of options)
    {
        if(myset.has(text))
        {
           duplicate.push(text);
            
        }

        else{

        myset.add(text);
         
        }
         
        
    }
    
  console.log("duplicate text" , duplicate)
  console.log("original text" , myset)

})

