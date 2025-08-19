import { test, expect } from '@playwright/test';
import { FormAuthenticationPage } from '../pages/formAuthenticationPage';

test.describe('Negative inputs', () => {

  test('should display error message for invalid input', async ({ page }) => {
    const loginPage = new FormAuthenticationPage(page);
    await loginPage.goToFormAuthenticationPage();

    await loginPage.login('Rolands', 'isWrong');

    await loginPage.expectFlashMessageToBeVisible();
    await loginPage.expectFlashMessageToContainText('Your username is invalid!');
  });
});
