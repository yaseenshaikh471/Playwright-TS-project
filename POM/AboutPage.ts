import {Page,Locator} from '@playwright/test'
export class AboutPage{
    readonly page: Page
    readonly login_user: Locator
    readonly pass_user: Locator
    readonly login_btn: Locator
    readonly burger_btn: Locator
    readonly about_link: Locator
    
    constructor(page:Page){
        this.page=page
        this.login_user=page.locator('[placeholder="Username"]')
        this.pass_user=page.locator('[placeholder="Password"]')
        this.login_btn=page.locator('[data-test="login-button"]')
        this.burger_btn=page.locator('button#react-burger-menu-btn')
        this.about_link=page.locator('a[href="https://saucelabs.com/"]')
    }
    async gotoPage(){
        await this.page.goto('https://www.saucedemo.com/cart.html')
    }
    
    async login(){
        await this.login_user.fill('standard_user')
        await this.pass_user.fill('secret_sauce')
        await this.login_btn.click()
        await this.page.waitForTimeout(1000)
    }
    async about(){
        await this.burger_btn.click()
        await this.about_link.click()
        await this.page.waitForTimeout(1000)
    }
}