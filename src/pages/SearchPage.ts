import { Locator, Page } from "@playwright/test";

export class SearchPage {
  private readonly page: Page;

  private readonly searchProductFieldLoc: Locator;
  private readonly searchButtonLoc: Locator;
  private readonly productsNameLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchProductFieldLoc = page.locator("#search_product");
    this.searchButtonLoc = page.locator("#submit_search");
    this.productsNameLoc = page.locator(".productinfo p");
  }

  async searchProduct(productName: string): Promise<boolean> {
    try {
      // Fill and search
      await this.searchProductFieldLoc.fill(productName);
      await this.searchButtonLoc.click();

      // Wait for products to load
      await this.page.waitForSelector(".productinfo p");

      // Check if any product contains the search term
      const productNames = await this.productsNameLoc.allTextContents();
      return productNames.some((name) => name.trim().includes(productName));
    } catch (error) {
      console.error("Exception in searchProduct: ", error);
      return false;
    }
  }
}
