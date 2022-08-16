import { expect, Page } from "@playwright/test";
import { AGE_RATING } from "../selectorsData";
import { AGE_RATING_EXPECT, AGE_RATING_EXPECT_NEG } from "../expectationsData";

export class AgeRatingModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async ageRatingCheck() {
        const ageRatingText = await this.page.locator(AGE_RATING).innerText();
        expect(ageRatingText).toEqual(AGE_RATING_EXPECT);
    }
    async ageRatingCheckNeg() {
        const ageRatingText = await this.page.locator(AGE_RATING).innerText();
        expect(ageRatingText).toEqual(AGE_RATING_EXPECT_NEG);
    }
}
