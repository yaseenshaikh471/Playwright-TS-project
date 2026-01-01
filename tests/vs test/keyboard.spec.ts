import{test,expect,Locator} from "@playwright/test"
test('Keyborad',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // const input1=await page.locator('[name="input1"]')
    // await input1.focus()
    // await page.keyboard.insertText('welcome')

    // await page.keyboard.down('Control')
    // await page.keyboard.press('A')
    // await page.keyboard.up('Control')

    // await page.keyboard.down('Control')
    // await page.keyboard.press('C')
    // await page.keyboard.up('Control')

    // await page.keyboard.press('Tab')
    // await page.keyboard.press('Tab')

    
    // await page.keyboard.press('Control+V')
    // await page.waitForTimeout(2500)

    await page.locator('#singleFileInput').setInputFiles("C:/Users/yasee/OneDrive/Pictures/Screenshots/Admin Order 1.png")
    await page.locator('[type="submit"]').nth(0).click()
    await expect(page.locator('#singleFileStatus')).toHaveText('Single file selected: Admin Order 1.png, Size: 225996 bytes, Type: image/png')
    await page.waitForTimeout(2500)

     await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/yasee/OneDrive/Pictures/Screenshots/Admin Order 1.png","C:/Users/yasee/OneDrive/Pictures/Screenshots/Admin Order 2.png"])
    await page.locator('[type="submit"]').nth(1).click()
    await expect(page.locator('#multipleFilesStatus')).toContainText('Admin Order 1.png')
    await expect(page.locator('#multipleFilesStatus')).toContainText('Admin Order 2.png')
    await page.waitForTimeout(2500)
})