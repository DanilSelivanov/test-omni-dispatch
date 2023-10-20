import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  readonly title: Locator;

  pageUrl(): string {
    return this.page.url();
  }

  async open(): Promise<void> {
    await this.page.goto(this.pageUrl());
  }

  async expectPageToHaveUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }
}