import {test,expect} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
test('accessibility',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    const results=await new AxeBuilder({page}).analyze()
    console.log(results)
    console.log(results.violations.length)
    expect(results.violations.length).toEqual(0)
})