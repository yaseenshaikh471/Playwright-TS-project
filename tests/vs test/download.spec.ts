import{test,expect,Locator} from "@playwright/test"
import { promises } from "dns"
import fs from 'fs'
test('Keyborad',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
    await page.locator('#inputText').fill('Welcome')
    await page.locator('#generateTxt').click()
    const [download]=await Promise.all ([page.waitForEvent('download'),
                        page.locator('#txtDownloadLink').click()])
    const downloadpath='downloads/testfile.txt'
    await download.saveAs(downloadpath)
    console.log(fs.existsSync(downloadpath))
    
    await page.waitForTimeout(2500)

})