import { test, expect } from "@playwright/test";

test("index page works", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The new url should be "/" (baseURL is used there)
  await expect(page).toHaveURL("/");
  // The new page should contain a p with ""
  await expect(page.locator("p").first()).toContainText("Normal font");
  await expect(page).toHaveTitle("Roni Tuohino");

  await expect(page.locator("p").first()).not.toContainText("Cool font trick");
});

test("ssr works", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/ssr");
  // The new url should be "/" (baseURL is used there)
  await expect(page).toHaveURL("/ssr");
  // The new page should contain a p with ""
  await expect(page.locator("p").first()).toContainText("SSR");
  await expect(page).toHaveTitle("Roni Tuohino");
});
