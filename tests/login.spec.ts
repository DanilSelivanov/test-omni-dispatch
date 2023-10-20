import { test, expect } from '../utils/fixtures';

test.describe('User on login page ', () => {
  test('should be able to login with correct credentials', async ({
    loginPage,
  }) => {
    await test.step(`GIVEN user is on Login page`, async () => {
      await loginPage.open();
    });

    await test.step(`WHEN valid credentials are used`, async () => {
      await loginPage.login(
        process.env.USER_EMAIL_FOR_TESTS!,
        process.env.USER_PASSWORD_FOR_TESTS!
      );
    });

    await test.step(`THEN user should be redirected to chats`, async () => {
      await loginPage.expectPageToHaveUrl(/.*chats/); // Ensure that we are now on chats page
    });
  });

  test('should see validation message when logging in with invalid credentials', async ({
    loginPage,
  }) => {
    await test.step(`GIVEN user is on Login page`, async () => {
      await loginPage.open();
    });

    await test.step(`WHEN invalid credentials are used`, async () => {
      await loginPage.login(
        'incorrectemail',
        'incorrectpassword'
      );
    });

    await test.step(`THEN user should see error`, async () => {
      await expect(loginPage.validationMessage).toBeVisible();

    }); // Ensure that the error message is visible

    await test.step(`AND user should stay at login page`, async () => {
      await loginPage.expectPageToHaveUrl(/.*login/); 
    });
  });
});
