import {Page,Locator} from '@playwright/test'
export class AddRemove{
    readonly page:Page
    readonly addtocardbtn:Locator
    readonly removebtnFrommainpage:Locator
    readonly cartbtn:Locator
    readonly removebtninfromcat:Locator
    readonly productcount:Locator


    constructor(page:Page){
        this.page=page
        this.addtocardbtn=page.locator('button.btn')
        this.removebtnFrommainpage=page.locator('button.btn')
        this.cartbtn=page.locator('a.shopping_cart_link')
        this.removebtninfromcat=page.locator('button.btn')
        this.productcount=page.locator('.cart_item')
    }

    async addingandremoving(){
        await this.addtocardbtn.nth(3).click()
        await this.page.waitForTimeout(1000)
        await this.addtocardbtn.nth(4).click()
        await this.page.waitForTimeout(1000)
        await this.addtocardbtn.nth(5).click()
        await this.page.waitForTimeout(1000)
        await this.removebtnFrommainpage.nth(4).click()
        await this.cartbtn.click()
        await this.removebtnFrommainpage.nth(0).click()
        await this.page.waitForTimeout(2000)
    }
}