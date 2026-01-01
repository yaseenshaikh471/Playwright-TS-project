import {Page,Locator} from "@playwright/test"
export class Addingtocart{
    readonly page: Page
    readonly favproduct: Locator
    readonly addtoCartbtn: Locator
    readonly carticon: Locator
    readonly checkoutbtn: Locator
    readonly fname: Locator
    readonly lname: Locator
    readonly zipcode: Locator
    readonly cnt_btn: Locator
    readonly finishbtn: Locator
    readonly thnkmsg: Locator

    constructor(page:Page){
        this.page=page
        this.favproduct=page.locator('a#item_1_title_link  div.inventory_item_name')
        this.addtoCartbtn= page.locator('[data-test="add-to-cart"]')
        this.carticon=page.locator('a.shopping_cart_link')
        this.checkoutbtn=page.locator('button[data-test="checkout"]')
        this.fname=page.locator('input[name="firstName"]')
        this.lname=page.locator('input[placeholder="Last Name"]')
        this.zipcode=page.locator('input[placeholder="Zip/Postal Code"]')
        this.cnt_btn=page.locator('[data-test="continue"]')
        this.finishbtn=page.locator('button[data-test="finish"]')
        this.thnkmsg=page.locator('[data-test="complete-header"]')
    }

    async orderPlacing(){
        await this.favproduct.click()
        await this.addtoCartbtn.click()
        await this.carticon.click()
        await this.checkoutbtn.click()
        await this.fname.fill('Random')
        await this.lname.fill('ahgs')
        await this.zipcode.fill('113222')
        await this.cnt_btn.click()
        await this.finishbtn.click()
    }
    
}