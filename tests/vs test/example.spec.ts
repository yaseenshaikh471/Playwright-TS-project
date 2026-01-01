// import {test,expect} from '@playwright/test';
// test('Verify page title',async ({page})=>{
//     await page.goto('https://www.cleartrip.com/flights?...');
//     await page.waitForLoadState('load');
//     const title = await page.title();
//     console.log('Page title:', title);
//     await expect(page).toHaveTitle("Flight bookings, Cheap flights, Lowest Air tickets @Cleartrip")
// })
import {test,expect,Locator} from '@playwright/test';
import { link } from 'fs';
test('Locators',async({page})=>{
    await page.goto('https://app.clubfeast.com/')
    const map:Locator= page.getByAltText('Where We Deliver') //Locators
    await expect (map).toBeVisible();
    // await page.getByRole('link',{class:"lg:hidden"}).click()
    // await page.getBylabel('link',{class:"lg:hidden"}).click()
    await page.locator("a[class='inline-flex items-center justify-center text-base gap-2 whitespace-nowrap uppercase font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-105 ease-in-out duration-150 text-primary bg-background shadow-sm hover:bg-primary hover:text-background border-primary border-2 hover:border-background rounded-full px-8 py-3 tracking-wide']").click()
    await page.getByLabel
})