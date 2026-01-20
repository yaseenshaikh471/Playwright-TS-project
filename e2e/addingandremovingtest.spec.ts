import {test,expect} from '@playwright/test'
import { Homepage } from '../POM/homepage'
import { AddRemove } from "../POM/AddRemove"
test('Adding and removing item from main page and cart',async({page})=>{
     const home_page= new Homepage(page)
     const addremove=new AddRemove(page)
     await home_page.gotoPage()
     await home_page.login('standard_user','secret_sauce')
     await addremove.addingandremoving()
})
