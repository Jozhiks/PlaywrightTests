import { Page, expect } from '@playwright/test';

export class FormAuthenticationPage {
  constructor(private page: Page) {
  }

  async goToFormAuthenticationPage() {
    await this.page.goto('/login');
  }

  get usernameInput() {
    return this.page.getByLabel('Username');
  }

  get passwordInput() {
    return this.page.getByLabel('Password');
  }

  private get loginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  get flashMessage() {
    return this.page.locator('#flash');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectFlashMessageToBeVisible() {
    await expect(this.flashMessage).toBeVisible();
  }

  async expectFlashMessageToContainText(expectedText: string) {
    await expect(this.flashMessage).toContainText(expectedText);
  }
}