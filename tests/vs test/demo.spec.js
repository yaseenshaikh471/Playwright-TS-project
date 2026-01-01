Map
const fruits = ["  apple  ", " banana ", "mango"];
const cleanFruits = fruits.map(fruit => fruit.trim());

console.log(cleanFruits); 
// ["apple", "banana", "mango"]


singletext
const text = await page.locator('h1').textContent();
// Example output: "  Welcome  "
const cleanText = text?.trim() ?? '';

mutilpetext
const items = await page.locator('ul li').allTextContents();
// Example output: ["  Item 1  ", " Item 2 ", "Item 3 "]
const cleanItems = items.map(text => text.trim());
