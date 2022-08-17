import { test } from "@playwright/test";
import { URLModule } from "../fixtures/modules/URLModule";
import { WeatherModule } from "../fixtures/modules/WeatherModule";
import { ExchangeRatesModule } from "../fixtures/modules/ExchangeRatesModule";
import { AgeRatingModule } from "../fixtures/modules/AgeRatingModule";
import { LogoModule } from "../fixtures/modules/LogoModule";
import { SearchModule } from "../fixtures/modules/SearchModule";
import { URL_NEG } from "../fixtures/linksData";
import {
    AGE_RATING_EXPECT_NEG,
    EXCHANGE_RATES_EXPECT_NEG,
    SEARCH_INPUT_EXPECT,
    SEARCH_TEXT_EXPECT_NEG,
} from "../fixtures/expectationsData";

test.describe("Test Suit #2. Negative tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test("1. URL check", async ({ page }) => {
        const urlModule = new URLModule(page);
        await urlModule.urlCheck(URL_NEG);
    });
    test("2. Weather check", async ({ page }) => {
        const weatherModule = new WeatherModule(page);
        await weatherModule.weatherCheckNeg();
    });
    test("3. Exchange Rates check", async ({ page }) => {
        const exchangeRatesModule = new ExchangeRatesModule(page);
        await exchangeRatesModule.exchangeRatesCheck(EXCHANGE_RATES_EXPECT_NEG);
    });
    test("4. Age rating check", async ({ page }) => {
        const ageRatingModule = new AgeRatingModule(page);
        await ageRatingModule.ageRatingCheck(AGE_RATING_EXPECT_NEG);
    });
    test("5. Logo check", async ({ page }) => {
        const logoModule = new LogoModule(page);
        await logoModule.logoCheck(URL_NEG);
    });
    test("6. Search text check", async ({ page }) => {
        const searchModule = new SearchModule(page);
        await searchModule.searchTextCheck(SEARCH_TEXT_EXPECT_NEG);
    });
    test("7. Search input check", async ({ page }) => {
        const searchModule = new SearchModule(page);
        await searchModule.searchInputType(SEARCH_INPUT_EXPECT);
        await searchModule.searchInputCheckNeg();
    });
});
