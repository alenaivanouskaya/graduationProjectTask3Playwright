import { expect, Page } from "@playwright/test";
import { EXCHANGE_RATES } from "../selectorsData";
import { EXCHANGE_RATES_EXPECT, EXCHANGE_RATES_EXPECT_NEG } from "../expectationsData";

export class ExchangeRatesModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async exchangeRatesCheck() {
        const exchangeRatesText = await this.page.locator(EXCHANGE_RATES).innerText();
        expect(exchangeRatesText).toContain(EXCHANGE_RATES_EXPECT);
    }
    async exchangeRatesCheckNeg() {
        const exchangeRatesText = await this.page.locator(EXCHANGE_RATES).innerText();
        expect(exchangeRatesText).toContain(EXCHANGE_RATES_EXPECT_NEG);
    }
}
