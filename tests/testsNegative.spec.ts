import { test } from "@playwright/test";
import { URLModule } from "../fixtures/modules/URLModule";
import { WeatherModule } from "../fixtures/modules/WeatherModule";
import { ExchangeRatesModule } from "../fixtures/modules/ExchangeRatesModule";
import { AgeRatingModule } from "../fixtures/modules/AgeRatingModule";
import { LogoModule } from "../fixtures/modules/LogoModule";
import { SearchModule } from "../fixtures/modules/SearchModule";

test.describe("Test Suit #2. Negative tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    test("1. URL check", async ({ page }) => {
        const urlModule = new URLModule(page);
        await urlModule.urlCheckNeg();
    });
    test("2. Weather check", async ({ page }) => {
        const weatherModule = new WeatherModule(page);
        await weatherModule.weatherCheckNeg();
    });
    test("3. Exchange Rates check", async ({ page }) => {
        const exchangeRatesModule = new ExchangeRatesModule(page);
        await exchangeRatesModule.exchangeRatesCheckNeg();
    });
    test("4. Age rating check", async ({ page }) => {
        const ageRatingModule = new AgeRatingModule(page);
        await ageRatingModule.ageRatingCheckNeg();
    });
    test("5. Logo check", async ({ page }) => {
        const logoModule = new LogoModule(page);
        await logoModule.logoCheckNeg();
    });
    test("6. Search text check", async ({ page }) => {
        const searchModule = new SearchModule(page);
        await searchModule.searchTextCheckNeg();
    });
    test("7. Search input check", async ({ page }) => {
        const searchModule = new SearchModule(page);
        await searchModule.searchInputCheckNeg();
    });
});