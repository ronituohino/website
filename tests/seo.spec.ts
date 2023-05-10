import { test, expect } from "@playwright/test";

test("robots.txt in root", async ({ page }) => {
  await page.goto("/robots.txt");
  const robots = await page.content();
  await expect(robots.length).toBeGreaterThan(0);
});

test("robots.txt has sitemap specified", async ({ page }) => {
  await page.goto("/robots.txt");
  const robots = await page.content();
  await expect(robots.includes("Sitemap:")).toBe(true);
});

test("sitemap.xml in root", async ({ page }) => {
  await page.goto("/sitemap.xml");
  const sitemap = await page.content();
  await expect(sitemap.length).toBeGreaterThan(0);
});

test("sitemap.xml has root path defined", async ({ page }) => {
  await page.goto("/sitemap.xml");
  const sitemap = await page.content();
  await expect(sitemap.includes("<loc>https://ronituohino.fi</loc>")).toBe(
    true
  );
});
