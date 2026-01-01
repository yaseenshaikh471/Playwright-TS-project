import {test,Locator,expect,chromium,webkit,Page} from '@playwright/test'
/*Browser--Context--page*/
// test('Browser window',async ()=>{
//     const browser = await chromium.launch()
//     const context = await browser.newContext()
//     const page1=await context.newPage()
//     // const page2=await context.newPage()
//     await page1.goto('https://testautomationpractice.blogspot.com/')
//     const [page2] =await Promise.all ([context.waitForEvent('page'),page1.locator('button[onclick="myFunction()"]').click()])

//     console.log('Title of page 1',await page1.title())
//     console.log('Title of page 2',await page2.title())
// })

test.only('Browser popup',async ({browser})=>{
    const context = await browser.newContext()
    const page1=await context.newPage()
    // const page2=await context.newPage()
    await page1.goto('https://testautomationpractice.blogspot.com/')
    const [popup] = await Promise.all([
        page1.waitForEvent('popup'),
        page1.locator('#Popup').click() 
    ])

    const allpopup= context.pages()
    console.log(allpopup[0].url(),allpopup[1].url())
    for (const pw of allpopup)
    {
        const title=await pw.title();
        if(title.includes('Playwright')){
            await pw.locator('.getStarted_Sjon').click()
            await pw.close()
        }
    }
})