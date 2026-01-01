import {test,expect} from '@playwright/test'
test.beforeEach('launching app',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
})
test('titletest',async({page})=>{
 await expect (page.locator('h1.title')).toBeVisible()
})
test('laptop',async({page})=>{
 await expect (page.getByText('Laptop Links')).toBeVisible()
})

/*npx allure generate allure-results --clean -o allure-report
npx allure open allure-report*/