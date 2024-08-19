import { test, expect } from '@playwright/test';

test.describe(() => {
  test.use({ storageState: 'playwright/.auth/admin.json' });

  test('should add patient as an admin', async ({ page }) => {

    await page.getByRole('link', { name: 'Pacjenci' }).click();
    await expect(page.getByRole('button', { name: 'Dodaj pacjenta' })).toBeVisible();

    await page.getByRole('button', { name: 'Dodaj pacjenta' }).click();
    await expect(page.locator('header')).toContainText('Dodaj pacjenta');

    // add patient data, assert patient is added and visible on the list...

  });
});