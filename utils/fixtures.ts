import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login/LoginPage';

type Objects = {
  loginPage: LoginPage;
};

const testExtendedWithPages = base.extend<Objects>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
export const test = testExtendedWithPages;
export const expect = test.expect;
