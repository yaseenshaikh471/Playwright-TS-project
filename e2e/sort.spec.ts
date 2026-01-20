import {test,expect} from '@playwright/test'
import { PriceCom } from '../POM/PriceCom'
import { AboutPage } from '../POM/AboutPage'
test ('Tesing price comapre after sorting low to high',async({page})=>{
    const pricecom= new PriceCom(page)
    const aboutpage= new AboutPage(page)
    await aboutpage.gotoPage()
    await aboutpage.login()
    await pricecom.pricecompare()
    const product1price = parseFloat((await pricecom.prices.nth(0).innerText()).replace('$', ''))
    const product2price = parseFloat((await pricecom.prices.nth(1).innerText()).replace('$', ''))
    await expect(product1price).toBeLessThan(product2price)
})