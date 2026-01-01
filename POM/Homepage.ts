import { Page,Locator } from "@playwright/test";
export class Homepage{
    readonly page: Page
    readonly burgerbtn: Locator
    readonly inputuser: Locator
    readonly inputpassword: Locator
    readonly loginbtn: Locator

    constructor(page: Page){
        this.page=page
        this.burgerbtn=page.locator('button#react-burger-menu-btn')
        this.inputuser=page.locator('input[placeholder="Username"]')
        this.inputpassword=page.locator('input[placeholder="Password"]')
        this.loginbtn=page.locator('#login-button')
    }
    async gotoPage(){
        await this.page.goto('https://www.saucedemo.com/cart.html')
    }

    async login(username:string,password:string){
        await this.inputuser.fill(username)
        await this.inputpassword.fill(password)
        await this.loginbtn.click()
    }

    async navigation(){
        await this.burgerbtn.click()
    }

}