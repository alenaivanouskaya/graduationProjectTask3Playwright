import { expect, Page } from "@playwright/test";
import { LOGO } from "../selectorsData";
import { URL, URL_NEG } from "../linksData";

export class LogoModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async logoCheck() {
        await this.page.locator(LOGO).click();
        const CURRENT_URL = this.page.url();
        expect(CURRENT_URL).toEqual(URL);
    }
    async logoCheckNeg() {
        await this.page.locator(LOGO).click();
        const CURRENT_URL = this.page.url();
        expect(CURRENT_URL).toEqual(URL_NEG);
    }
}
