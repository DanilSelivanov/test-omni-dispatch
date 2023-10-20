import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage{
  readonly emailInput: Locator = this.page.locator('input[type="email"]');
  readonly passwordInput: Locator = this.page.locator('input[type="password"]');
  readonly submitBtn: Locator = this.page.locator('button[type="button"]');
  readonly validationMessage: Locator = this.page.locator('div.v-messages__message');

  public async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }

  pageUrl(): string {
    return '/login';
  }
}
