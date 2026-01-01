import {Page} from '@playwright/test' 
export class checkingtitle{
    page: Page
    constructor(page: Page){
        this.page=page
    }

    async gotopage(){
        await this.page.goto('https://demo.opencart.com/')
    }
}