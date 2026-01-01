import {Page,Locator} from '@playwright/test'
import { promises } from 'dns';
class LoginPage
{
    private readonly page: Page;
    private readonly loginlink:Locator
    private readonly userNameInput:Locator
    private readonly passwordInput:Locator
    private readonly loginButton:Locator


constructor(page:Page)
{
    this.page=page
    this.loginlink=this.page.locator('#login2')
    this.userNameInput=this.page.locator('#loginusername')
    this.passwordInput=this.page.locator('#loginpassword')
    this.loginButton=this.page.locator('[onclick="logIn()"]')
}

async clickLoginLink():Promise<void>
{
    await this.loginlink.click()
}
async enterUserName(username:string):Promise<void>
{
    this.userNameInput.clear()
    this.userNameInput.fill(username)
}
async enterPassword(password:string):Promise<void>
{
    this.passwordInput.clear()
    this.passwordInput.fill(password)
}
async clickOnLoginButton():Promise<void>
{
    this.loginButton.click()
}

async perform(username:string,password:string)
{
    await this.clickLoginLink()
    await this.enterUserName(username)
    await this.enterPassword(password)
    await this.clickOnLoginButton()
}
}