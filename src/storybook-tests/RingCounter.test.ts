import { test, expect } from '@playwright/test';
test('Ring counter increments', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=sonic-ringcounter--default');
  await page.getByText('Collect a Ring').click();
  await expect(page.getByTestId('ring-count')).toHaveText('Rings: 1');
});