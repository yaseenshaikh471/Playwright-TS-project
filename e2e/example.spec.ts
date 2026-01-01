import { test, expect } from '@playwright/test';
import {checkingtitle} from '../POM/checkingtitle'
test('checking title',async({page})=>{
    const checking_title = new checkingtitle(page)
    await checking_title.gotopage()
})

