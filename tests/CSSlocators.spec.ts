/*we use locators below FormData
tag with id                     tag#id  tag is optional
tag with class                  tag.class    tag is optional
tag with any attribute        tag[attribute=value]   tag is optional
tag with class and atrribute  tag.class[attribute=value]   tag is optional*/

import{test , expect,  Locator} from "@playwright/test";

test("CSsLocatorsdemo",async({page})=>{


    await.page.goto("")
})
