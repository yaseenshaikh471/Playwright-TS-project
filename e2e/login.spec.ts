import {test,expect} from '@playwright/test'
import { Homepage } from '../POM/homepage'
import { Addingtocart } from '../POM/Addingtocart'

test('Successful login with correct data',async({page})=>{
    const home_page= new Homepage(page)
    const adding_tocart= new Addingtocart(page)
    await home_page.gotoPage()
    await home_page.login('standard_user','secret_sauce')
    await home_page.navigation()
    await expect(page).toHaveTitle('Swag Labs')

    await adding_tocart.orderPlacing()
    await expect(adding_tocart.thnkmsg).toContainText('Thank you for your order!')
})