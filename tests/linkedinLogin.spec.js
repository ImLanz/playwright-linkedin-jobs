import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPages';
import { config } from '../utils/config';

test('User can login to LinkedIn successfully', async ({ page }) => {

    await page.context().storageState({ path: 'storageState.json' });

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await expect(loginPage.emailInput).toBeVisible();
    await loginPage.login(config.email, config.pass);

    await expect(page).toHaveURL(/feed/);
});