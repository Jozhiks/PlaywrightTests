import { test, expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/addRemoveElementsPage';

test.describe('Add/Remove Elements Functionality', () => {
  test('should add and then remove an element successfully', async ({ page }) => {
    const addRemovePage = new AddRemoveElementsPage(page);
    await addRemovePage.goToAddRemoveElementsPage();

    await addRemovePage.clickAddElement();
    await addRemovePage.howManyButtons(1);
    await addRemovePage.checkIfButtonVisible();

    await addRemovePage.clickDeleteElement();
    await addRemovePage.howManyButtons(0);
    await addRemovePage.checkIfButtonNotVisible();
  });
});