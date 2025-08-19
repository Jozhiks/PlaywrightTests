import { Page, expect } from '@playwright/test';

export class AddRemoveElementsPage {
  constructor(private page: Page) {
  }

  async goToAddRemoveElementsPage() {
    await this.page.goto('/add_remove_elements/');
  }

  get addElementButton() {
    return this.page.locator('button', { hasText: 'Add Element' });
  }

  get deleteButtons() {
    return this.page.locator('.added-manually');
  }

  async clickAddElement() {
    await this.addElementButton.click();
  }

  async clickDeleteElement() {
    await this.deleteButtons.first().click();
  }

  async howManyButtons(expectedCount: number) {
    await expect(this.deleteButtons).toHaveCount(expectedCount);
  }

  async checkIfButtonVisible() {
    await expect(this.deleteButtons.first()).toBeVisible();
  }

  async checkIfButtonNotVisible() {
    await expect(this.deleteButtons).toBeHidden();
  }
}