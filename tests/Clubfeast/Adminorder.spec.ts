import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('test', async ({ page }) => {
  await page.goto('https://admin-develop.clubfeast.com/login');
  await page.getByRole('textbox', { name: '* Email' }).click();
  await page.getByRole('textbox', { name: '* Email' }).click();
  await page.getByRole('textbox', { name: '* Email' }).fill('yaseen.shaikh@clubfeast.com');
  await page.getByRole('button', { name: 'Send Verification Code' }).click();
  await page.locator('div').filter({ hasText: /^Verification Code$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).fill('mystiriodis');
  await page.getByRole('button', { name: 'Submit' }).click();
  const results=await new AxeBuilder({page}).analyze()
  console.log(results.violations.length)
  results.violations.forEach(v => {
  console.log(`Rule: ${v.id}`)
  console.log(`Tags: ${v.tags.join(', ')}`)
})
//   await expect(page.getByRole('link', { name: 'white clubfeast logo' })).toBeVisible();
//   await page.getByRole('tab', { name: 'right shopping Orders' }).click();
//   await page.getByRole('link', { name: 'Orders pushpin', exact: true }).click();
//   await page.getByRole('link', { name: 'Feast Links pushpin' }).click();
//   await page.getByRole('button', { name: 'Create Feast Link' }).click();
//   await page.getByRole('textbox', { name: 'Value' }).click();
//   await page.getByRole('textbox', { name: 'Value' }).fill('Ample');
//   await page.getByRole('cell', { name: 'Dev Ample - 100 Hooper St' }).click();
//   await page.getByRole('textbox', { name: 'Title' }).click();
//   await page.getByRole('textbox', { name: 'Title' }).fill('Evasd');
//   await page.getByRole('button', { name: 'Create', exact: true }).click();
//   await expect(page.getByRole('button', { name: 'plus New Section' })).toBeVisible();
//   await page.getByRole('button', { name: 'plus New Section' }).click();
//   await page.locator('div.ant-picker').click()
//   await page.locator('tbody tr:nth-child(5) .ant-picker-cell-today + *').click()
//   await page.locator('div.ant-modal-content div.ant-select-selector').nth(1).click()
//   await page.locator('div.ant-modal-content tbody tr:nth-child(3) td:nth-child(2)').click();
//   await expect(page.getByRole('button', { name: 'Create Section' })).toBeVisible();
//   await page.getByRole('button', { name: 'Create Section' }).click();
//   await page.getByRole('link', { name: 'https://corporate-develop.' }).click();
//   await page.getByRole('button', { name: 'copy Copy Link' }).click();
//   await page.getByRole('button', { name: 'Close', exact: true }).click();
});

//npx playwright codegen -o filename.spec.ts
//npx playwright test tests/codegen.spec.ts --project=chromium --headed --debug