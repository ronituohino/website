import { test, expect } from "@playwright/test";

test("index page works", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL("/");
  await expect(page.locator("p").first()).toContainText("Normal font");
  await expect(page).toHaveTitle("Roni Tuohino");
  await expect(page.locator("p").first()).not.toContainText("Cool font trick");
});

test("ssr works", async ({ page }) => {
  await page.goto("/ssr");
  await expect(page).toHaveURL("/ssr");
  await expect(page.locator("p").first()).toContainText("SSR");
  await expect(page).toHaveTitle("Roni Tuohino");
});
