import { test, expect } from '@playwright/test';

test('Testing APIs', async ({ request }) => {
  const requestBody = {
    username: 'admin',
    password: 'password123'
  };

  const response = await request.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      data: requestBody
    }
  );

  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.ok()).toBeTruthy();
  const apiToken= responseBody.token
  console.log(apiToken);
});
