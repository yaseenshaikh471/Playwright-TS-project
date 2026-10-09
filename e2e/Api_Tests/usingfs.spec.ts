// import { test, expect } from '@playwright/test';
// // import * as fs from 'fs';

// test('Testing APIs', async ({ request }) => {
//   const jsonFile='testdata/data.json';
//   // const requestBody:any=JSON.parse(fs.readFileSync(jsonFile,'utf-8'));
//   const response = await request.post(
//     'https://restful-booker.herokuapp.com/auth',
//     {
//       data: requestBody
//     }
//   );
//   const responseBody = await response.json();
//   console.log(responseBody);
//   expect(response.ok()).toBeTruthy();
//   const apiToken= responseBody.token
//   console.log(apiToken);
// });
