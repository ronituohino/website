import { test, expect } from "@playwright/test";

test("index page works", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL("/");
  await expect(page).toHaveTitle("Roni Tuohino");
});
