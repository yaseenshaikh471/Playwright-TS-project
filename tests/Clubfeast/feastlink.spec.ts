import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin-develop.clubfeast.com/login');
  await page.getByRole('textbox', { name: '* Email' }).click();
  await page.getByRole('textbox', { name: '* Email' }).fill('yaseen.shaikh@clubfeast.com');
  await page.getByRole('button', { name: 'Send Verification Code' }).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).fill('mystiriodis');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('link', { name: 'white clubfeast logo' })).toBeVisible();
  await page.getByRole('tab', { name: 'right shopping Orders' }).click();
  await page.getByRole('link', { name: 'Feast Links pushpin' }).click();
  await page.getByRole('button', { name: 'Create Feast Link' }).click();
  await page.locator('div').filter({ hasText: /^namecontains$/ }).getByRole('textbox').fill('ample');
  await page.getByText('Dev Ample - 100 Hooper St').click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('test');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'plus New Section' }).click();
  await page.getByRole('textbox', { name: 'Select Day' }).click();
  await page.getByText('23', { exact: true }).click();
  await page.locator('#rc_select_24').click();
  await page.getByText(':00 AM - 07:30 AM (PAYG)').click();
  await page.locator('td').filter({ hasText: /^Partnered$/ }).first().click();
  await page.getByRole('button', { name: 'Create Section' }).click();
  await page.getByText('Contact cutoff time already').click();
  await expect(page.getByText('Contact cutoff time already')).toBeVisible();
});