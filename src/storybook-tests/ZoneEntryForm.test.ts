import { test, expect } from '@playwright/test';
test('ZoneEntryForm submits with valid input', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=components-zoneentryform--default');
  const nameInput = page.getByLabel('Your Name');
  const zoneOption = page.getByRole('option', { name: 'Beach' });
  const submitButton = page.getByRole('button', { name: "Let's Go!" });
  // Submit with nothing filled — expect error
  await submitButton.click();
  await expect(page.getByText(/sonic needs a name/i)).toBeVisible();
  // Fill only name
  await nameInput.fill('Shadow');
  await submitButton.click();
  await expect(page.getByText(/choose a zone/i)).toBeVisible();
  // Select zone
  await page.selectOption('select', 'Forest');
  // Submit correctly
  await submitButton.click();
  await expect(page.locator('text=choose a zone')).toHaveCount(0);
});