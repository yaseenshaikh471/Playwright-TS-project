import {test,expect,Locator} from '@playwright/test'
test('web tables static',async({page})=>{
    // await page.goto('https://demowebshop.tricentis.com/')
    // const products:Locator=page.locator('.product-title')
    // const count=await products.count()
    // for(let i=0;i<count;i++)
    // {
    //     const productName: string = await products.nth(i).innerText()
    //     console.log(productName)
    // }
    // for(let i=0;i<count;i++)
    // {
    //     const productName: string | null = await products.nth(i).innerText
    //     console.log(productName)
    // }
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(await page.locator('[name="BookTable"] tbody tr td').count())
    const table:Locator= await page.locator('table[name="BookTable" tbody')
    const rows:Locator=table.locator('tr')
    console.log(rows.count())
    const secondRowcells:Locator=rows.nth(2).locator('td')
    test.slow()
})