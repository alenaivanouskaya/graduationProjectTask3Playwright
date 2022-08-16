import { expect, Page } from "@playwright/test";
import { CATALOG, SEARCH, SEARCH_TEXT_ATTRIBUTE } from "../selectorsData";
import { SEARCH_INPUT_EXPECT, SEARCH_TEXT_EXPECT, SEARCH_TEXT_EXPECT_NEG } from "../expectationsData";

export class SearchModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async searchTextCheck() {
        const searchText = await this.page.locator(SEARCH).getAttribute(SEARCH_TEXT_ATTRIBUTE);
        expect(searchText).toContain(SEARCH_TEXT_EXPECT);
    }
    async searchTextCheckNeg() {
        const searchText = await this.page.locator(SEARCH).getAttribute(SEARCH_TEXT_ATTRIBUTE);
        expect(searchText).toContain(SEARCH_TEXT_EXPECT_NEG);
    }
    async searchInputCheck() {
        await this.page.type(SEARCH, SEARCH_INPUT_EXPECT);
        await this.page.isVisible(CATALOG);
    }
    async searchInputCheckNeg() {
        await this.page.type(SEARCH, SEARCH_INPUT_EXPECT);
        await this.page.isHidden(CATALOG);
    }
}
