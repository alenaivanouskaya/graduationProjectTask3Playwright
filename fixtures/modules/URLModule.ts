import { expect, Page } from "@playwright/test";
import { URL, URL_NEG } from "../linksData";

export class URLModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async urlCheck() {
        const CURRENT_URL = this.page.url();
        expect(CURRENT_URL).toContain(URL);
    }
    async urlCheckNeg() {
        const CURRENT_URL = this.page.url();
        expect(CURRENT_URL).toContain(URL_NEG);
    }
}
