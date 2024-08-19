import { test as setup, expect } from '@playwright/test';

const adminFile = 'playwright/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {

    await page.goto('/');

    await page.getByLabel('Email').fill('demo.administrator@medgenium.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.locator('#app-root-themed')).toContainText('Manfred Probecki');

    await page.context().storageState({ path: adminFile });
});

const doctorFile = 'playwright/.auth/doctor.json';

setup('authenticate as a doctor', async ({ page }) => {

    await page.goto('/');

    await page.getByLabel('Email').fill('demo.lekarz+1@medgenium.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.locator('#app-root-themed')).toContainText('Rudolf Rastrowy');

    await page.context().storageState({ path: doctorFile });
});