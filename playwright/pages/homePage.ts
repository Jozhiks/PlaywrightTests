import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {
  }

  async goToHomePage() {
    await this.page.goto('/');
  }

  async verifyTitle(expectedHeading: string) {
    const welcomeHeading = this.page.getByText('Welcome to the-internet');

    await expect(welcomeHeading).toBeVisible();
    await expect(welcomeHeading).toHaveText(expectedHeading);
  }
}