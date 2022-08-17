import { expect, Page } from "@playwright/test";
import { AGE_RATING } from "../selectorsData";

export class AgeRatingModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async ageRatingCheck(value: string) {
        const ageRatingText = await this.page.locator(AGE_RATING).innerText();
        expect(ageRatingText).toEqual(value);
    }
}
