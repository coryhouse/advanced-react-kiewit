import { test, expect } from "@playwright/test";

test("should support product search and add to cart", async ({ page }) => {
  await page.goto("http://localhost:3000/?scenario=success&delay=200");

  // Should show the loading message then hide it.
  await expect(page.getByText("Loading...")).toBeVisible();
  await expect(page.getByText("Loading...")).toBeHidden();

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

test("should display a message when no products exist", async ({ page }) => {
  await page.goto("http://localhost:3000/?scenario=empty");
  await expect(page.getByText("No products found.")).toBeVisible();
});

test("should display an error message when the backend throws a 500", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/?scenario=error");
  await expect(page.getByText("Oops! An error occurred.")).toBeVisible();
});
