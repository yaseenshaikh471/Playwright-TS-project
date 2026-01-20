import {Page,Locator} from '@playwright/test'
export class PriceCom{
    readonly page: Page
    readonly dropdown: Locator
    readonly prices: Locator

    constructor(page:Page){
        this.page=page
        this.dropdown=page.locator('select.product_sort_container')
        this.prices=page.locator('.inventory_item_price')
        
    }

    async pricecompare(){
        await this.dropdown.selectOption('lohi')
        
    }
}