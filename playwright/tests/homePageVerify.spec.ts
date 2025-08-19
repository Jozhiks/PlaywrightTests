import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Check the webpages title', () => {

  test('opens the webpage and checks if the title is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();

    await homePage.verifyTitle('Welcome to the-internet');
  });
});