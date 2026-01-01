import {test,expect} from '@playwright/test'
test('mouse hover',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('button.dropbtn').hover()
    await page.locator('.dropdown-content ').nth(0).hover()
    await expect( page.locator('.dropdown-content a').nth(0)).toBeVisible()
    await page.waitForTimeout(2500)
    await page.locator('button[ondblclick="myFunction1()"]').click({button:'right'})
    await page.waitForTimeout(2500)
    await page.locator('button[ondblclick="myFunction1()"]').dblclick()
    await expect( page.locator('#field2')).toHaveValue('Hello World!')
    await page.locator('#draggable').dragTo(page.locator('#droppable'))
    await expect(page.locator('#droppable p')).toHaveText('Dropped!')
    await page.waitForTimeout(2500)
})

test('scroll',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://testautomationpractice.blogspot.com/')
   const selector = '#target-element'; // Replace with the selector of the element you want
  let found = false;

  for (let i = 0; i < 30; i++) {
    const element = await page.$(selector);
    if (element) {
      found = true;
      console.log('✅ Element found!');
      break;
    }

    // Scroll down by one screen height
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

    // Wait a bit for new content to load
    await page.waitForTimeout(500);
  }

  if (!found) {
    console.log('❌ Element not found.');
  }

  await browser.close();

})