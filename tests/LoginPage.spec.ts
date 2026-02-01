import { test, expect } from "@playwright/test";
import { loginPage } from "../page-objects/LoginPage.spec.ts";
import { securePage } from "../page-objects/SecurePage.spec.ts";


test("[1] Successful Login", async ({page}) => {
    const userLoginPage = new loginPage(page);
    const userSecurePage = new securePage(page);
    await userLoginPage.goto();
    await userLoginPage.usernameTextBox.fill("tomsmith");
    await userLoginPage.passwordTextBox.fill("SuperSecretPassword!");
    await userLoginPage.loginButton.click();
    // Checking the user got the toast for successful login
    await expect(userSecurePage.toastMessage).toContainText("You logged into a secure area!");
});

test("[2] Login with Invalid Username", async ({page}) => {
    const userLoginPage = new loginPage(page);
    await userLoginPage.goto();
    await userLoginPage.usernameTextBox.fill("invalid");
    await userLoginPage.passwordTextBox.fill("SuperSecretPassword!");
    await userLoginPage.loginButton.click();
    // Checking the user got the toast for invalid username
    await expect(userLoginPage.toastMessage).toContainText("Your username is invalid!");
});

test("[3] Login with Invalid Password", async ({page}) => {
    const userLoginPage = new loginPage(page);
    await userLoginPage.goto();
    await userLoginPage.usernameTextBox.fill("tomsmith");
    await userLoginPage.passwordTextBox.fill("invalid");
    await userLoginPage.loginButton.click();
    // Checking the user got the toast for invalid password
    await expect(userLoginPage.toastMessage).toContainText("Your password is invalid!");
});

test("[4] Logout of the page", async ({page}) => {
    const userLoginPage = new loginPage(page);
    const userSecurePage = new securePage(page);
    await userLoginPage.goto();
    await userLoginPage.usernameTextBox.fill("tomsmith");
    await userLoginPage.passwordTextBox.fill("SuperSecretPassword!");
    await userLoginPage.loginButton.click();
    await userSecurePage.logoutButton.click();
    // Checking the user got the toast for logout of the secure area
    await expect(userSecurePage.toastMessage).toContainText("You logged out of the secure area!");
});
