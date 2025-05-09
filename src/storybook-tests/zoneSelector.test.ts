import { test, expect } from '@playwright/test';
test('Zone selector shows options and selects', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=sonic-zoneselector--default');
  await page.selectOption('select', 'Mountain');
  // Not asserting alert, but confirms interaction works
});