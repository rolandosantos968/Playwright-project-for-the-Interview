import {Page,Locator} from "@playwright/test";

export class securePage{
    readonly page: Page;
    readonly toastMessage: Locator;
    readonly logoutButton: Locator;

    constructor (page: Page){
        this.page = page;
        this.toastMessage= page.locator("#flash");
        this.logoutButton= page.getByRole("link", { name: "logout" });
    }

}