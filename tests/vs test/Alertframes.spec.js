import {test,expect,Locator} from '@playwright/test'
test('Alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',(dialog)=>{
        console.log('This pop is',dialog.type())
        console.log('This pop text',dialog.message())
        dialog.accept()
    })
    await page.locator('#alertBtn').click()

})

test('confirm',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',(dialog)=>{
        console.log('This pop is',dialog.type())
        console.log('This pop text',dialog.message())
        dialog.dismiss()

    })
    await page.locator('#confirmBtn').click()
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')

})

test('textprompt',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',(dialog)=>{
        console.log('This pop is',dialog.type())
        console.log('This pop text',dialog.message())
        dialog.accept('Yaseen')

    })
    await page.locator('#promptBtn').click()
    await expect(page.locator('#demo')).toHaveText('Hello Yaseen! How are you today?')
    await page.waitForTimeout(3000)

})

test('frame1',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    console.log(await page.frames().length)
    const frame1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    if(frame1)
    {
        await frame1.locator('[name="mytext1"]').fill('HI Asad')
    }
    else{console.log('Nothing Found')}
    await page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]').fill('Kya bolte')
    await page.waitForTimeout(3000)
})

test.only('frame3',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    
    if(frame3)
    {
        console.log(frame3.childFrames().length)
        const childFrames=frame3.childFrames()
        await childFrames[0].locator('[data-value="I am a human"]').check()
    }
    else{console.log('Nothing Found')}
    // await page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]').fill('Kya bolte')
    await page.waitForTimeout(3000)
})