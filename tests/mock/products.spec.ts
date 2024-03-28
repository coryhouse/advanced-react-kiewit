import { test, expect } from "@playwright/test";

test("should support product search and add to cart", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Assure products display
  await expect(page.getByText("Product 1")).toBeVisible();
  await expect(page.getByText("Product 2")).toBeVisible();
  await expect(page.getByText("Product 3")).toBeVisible();

  // Search for product
  await page.getByPlaceholder("Search...").fill("Product 1");
  await expect(page.getByText("Product 1")).toBeVisible();

  // These products should not be visible anymore
  await expect(page.getByText("Product 2")).toBeHidden();
  await expect(page.getByText("Product 3")).toBeHidden();

  // Add product to cart
  await page.getByRole("button", { name: "Add Product 1 to cart" }).click();

  // Now the cart nav link should show 1 item
  await expect(page.getByRole("link", { name: "Cart (1)" })).toBeVisible();
});
