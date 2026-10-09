import { test, expect } from '@playwright/test';
test('Testing booking', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking',
  );
  const responseBody = await response.json()
  console.log(responseBody);
})
