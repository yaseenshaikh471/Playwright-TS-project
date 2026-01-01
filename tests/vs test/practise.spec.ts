import {test,expect,Locator} from '@playwright/test'
test('Action,Checkboxes,radiobutton',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#male').check()
    await expect(page.locator('#male')).toBeChecked()
    await page.locator('textarea#textarea').fill('chhahc')
    console.log(await page.locator('textarea#textarea').inputValue()) //Value of input box
    await page.locator('#country').selectOption('France') //by text Drop down
    await page.locator('#country').selectOption({value:"japan"}) //by attrubute Drop down
    
    const dropdownOptions:Locator=await page.locator('#country option')
    await expect(dropdownOptions).toHaveCount(10); 
    const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText)
    expect(optionsText).toContain('Japan')
    await page.locator('#colors').selectOption(['Red','Blue'])
    await page.waitForTimeout(2000)
})