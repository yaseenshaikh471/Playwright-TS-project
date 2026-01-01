import {test,expect,Locator} from '@playwright/test'
test('Autofill dropdown',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator('input[name="q"]').fill('Smart') //ctrl+shift+p emulate focused
    await page.waitForTimeout(3000)
    const options:Locator=page.locator('ul li')
    const count=await options.count()
    console.log('number of options',count)
    console.log('5th option is:',options.nth(5).innerText())
    // for (let i=0;i<count;i++)
    // {
    //     console.log(await options.nth(i).innerText)
    // }
    console.log('all options:',(await options.allTextContents()).map(text=>text.trim()))
     for (let i=0;i<count;i++)
    {
        const textwanti=await options.nth(i).innerText()
        if (textwanti==='smart')
        {
            options.nth(i).click()
            break
        }

    }
})