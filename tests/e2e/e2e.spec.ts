import { test, expect } from "@playwright/test";

test("should be able to load all pages", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("heading", { name: "Products" })).toBeVisible();
  await page.getByRole("link", { name: "About" }).click();
  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
  await page.getByRole("link", { name: "Admin" }).click();
  await expect(
    page.getByRole("heading", { name: "Administer Products" })
  ).toBeVisible();
});
