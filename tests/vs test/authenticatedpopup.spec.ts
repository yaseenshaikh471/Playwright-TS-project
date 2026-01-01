import {test,expect,Page} from '@playwright/test'
test('auth popup',async({browser})=>{
    const context =await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://gold:mystiriodis@order-develop.clubfeast.com/login?redirect=%2F')
    await page.waitForLoadState()
    await expect(page.locator('[alt="Club Feast Logo"]')).toBeVisible()
    await page.waitForTimeout(5000)
})
test.only('authenticated popup',async({browser})=>{
    const context =await browser.newContext({httpCredentials:{username:'gold',password:'mystiriodis'}})
    const page=await context.newPage()
    await page.goto('https://order-staging.clubfeast.com/login?redirect=%2F')
    await page.waitForLoadState()
    await expect(page.locator('[alt="Club Feast Logo"]')).toBeVisible()
    await page.waitForTimeout(5000)
})