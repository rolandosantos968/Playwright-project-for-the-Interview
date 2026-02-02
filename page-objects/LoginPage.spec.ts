import {Page,Locator} from "@playwright/test";

export class loginPage{
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;
    readonly toastMessage: Locator;

    constructor (page: Page){
        this.page = page;
        this.usernameTextBox= page.getByLabel("username");
        this.passwordTextBox= page.getByLabel("password");
        this.loginButton= page.getByRole("button",{name:"LoGin"});
        this.toastMessage= page.locator("#flash");
    }

    async goto(){
        await this.page.goto("/login");

    }

    async login(username: string, password: string){
        await this.usernameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }
}