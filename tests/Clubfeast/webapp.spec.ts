import { test, expect, Page, chromium, Browser, BrowserContext } from '@playwright/test';

let page: Page;       
let browser: Browser;  
let context: BrowserContext;

test.use({
  httpCredentials: {
    username: 'gold',
    password: 'mystiriodis' 
  }
})

test.beforeAll('Launch website',async()=>{ 
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
await page.goto('https://order-develop.clubfeast.com/login?redirect=%2F')
})
test.afterAll('close',async()=>{
  await page.close()
})
test.afterEach('Logout',async()=>{
   await page.waitForLoadState('networkidle', { timeout: 5000 });
  await page.locator('.navbar-end li:nth-child(5)').click({ timeout: 5000 })
  await page.locator('section:nth-child(3) button:nth-child(1)').nth(0).click({ timeout: 5000 })
  await page.locator('#confirmationModal .modal-box button').nth(1).click({ timeout: 5000 })
   await page.waitForLoadState('networkidle', { timeout: 3000 });
})
test('Place order basic',async ({})=>{
    const title:string = await page.title();
    await page.locator('[name="email"]').fill('newuser@auto.com')
    await page.locator('button[type="submit"]').click()
    await page.locator('input[name="authCode"]').fill('mystiriodis')
    await page.locator('button.btn').click()
    const addressButton= await page.locator('div.modal-box button[name="deliveryAddress"]').nth(0)
    if(await addressButton.isVisible())
    {
      await addressButton.click()
      console.log('address selected')
    }else{console.log('ignored')}
    await page.waitForTimeout(2000)
    const feedbackButton = await page.locator('.modal-box.bg-gray-light.mx-auto.rounded-2xl')
    if(await feedbackButton.isVisible())
    {
      await page.reload()
      console.log('feedback appeared')
    }
    else{console.log('No feedback')}
    await page.locator('.flex.h-full.flex-col button.btn.w-fit').nth(0).click()
    const rawText = await page.locator('.flex.h-full.flex-col.items-center.p-2').nth(0).textContent() || '';
    const [restaurantName] = rawText.split(/(?=[A-Z])/); 
    console.log('Restaurant Name:', restaurantName);
    await page.waitForTimeout(2500)
    // const dishLocator = page.locator('.card-body.justify-between.gap-1.p-3');
    // await dishLocator.first().waitFor({ state: 'visible', timeout: 5000 });
    // const alldishes: string[]=await page.locator('h2.card-title.block').allTextContents()
    // console.log(alldishes)
    await page.locator('.card-body .btn').nth(0).click()
    // const dishName=await page.locator('form p.text-2xl').textContent()
    // console.log(dishName)
    // await page.locator('.card.transition-shadow button.btn').click()
    await expect(page.getByText('Order Paid')).toContainText('Order Paid')
})  

test.only('Place order org admin',async ({})=>{
    const title:string = await page.title();
    await page.locator('[name="email"]').fill('oraauto@auto.com')
    await page.locator('button[type="submit"]').click()
    await page.locator('input[name="authCode"]').fill('mystiriodis')
    await page.locator('button.btn').click()
    
  })
