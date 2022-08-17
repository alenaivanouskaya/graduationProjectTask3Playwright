import { expect, Page } from "@playwright/test";
import { EXCHANGE_RATES } from "../selectorsData";

export class ExchangeRatesModule {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async exchangeRatesCheck(value: string) {
        const exchangeRatesText = await this.page.locator(EXCHANGE_RATES).innerText();
        expect(exchangeRatesText).toContain(value);
    }
}
