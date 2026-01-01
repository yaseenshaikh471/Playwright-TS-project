import {test,expect} from '@playwright/test'
test ('test',async({page})=>{
    page.goto('https://demowebshop.tricentis.com/')
    // expect (await page.screenshot()).toMatchSnapshot('homepage.png')
    // await expect (page).toHaveScreenshot()
    const logo=page.locator('img[alt="Tricentis Demo Web Shop"]')
    expect(await logo.screenshot()).toMatchSnapshot('logo.png')
}) 