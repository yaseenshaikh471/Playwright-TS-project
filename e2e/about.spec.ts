import {test,expect} from '@playwright/test'
import { AboutPage } from '../POM/AboutPage'

test('testing about page',async({page})=>{
    const aboutpage= new AboutPage(page)
    await aboutpage.gotoPage()
    await aboutpage.login()
    await aboutpage.about()
    await expect(page).toHaveTitle('Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing')
})