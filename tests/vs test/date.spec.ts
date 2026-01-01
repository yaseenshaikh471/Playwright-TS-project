import {test,expect,Locator} from '@playwright/test'
test('datepicker',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dateinput: Locator= await page.locator('#datepicker')
    await expect(dateinput).toBeVisible()
    dateinput.fill('19/09/2025')
    await page.waitForTimeout(2000)

    dateinput.click()
    const year='2026'
    const month='June'
    const date='15'

    while(true)
    {
        const currrentmonth=await page.locator('.ui-datepicker-month').textContent()
        const currrentyear=await page.locator('.ui-datepicker-year').textContent()
        if(currrentmonth===month && currrentyear===year)
        {
            break;
        }
        await page.locator('.ui-datepicker-next').click()
    }

    const alldates=await page.locator('.ui-datepicker-calendar a').all();
    for(let mydate of alldates)
    {
        const dateText=await mydate.innerText();
        if(dateText === date)
        {
            await mydate.click()
            break
        }
    }
    await page.waitForTimeout(5000)

})