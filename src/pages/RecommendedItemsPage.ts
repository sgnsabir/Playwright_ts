import { Locator, Page } from "@playwright/test";

export class RecommendedItemsPage {
  private readonly page: Page;

  private readonly featureTitleLoc: Locator;
  private readonly recommendedTitleLoc: Locator;
  private readonly addToCartBtnsLoc: Locator;
  private readonly continueShoppingBtnLoc: Locator;
  private readonly viewCartBtnLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.featureTitleLoc = page.locator(".features_items h2.title");
    this.recommendedTitleLoc = page.locator(".recommended_items h2.title");
    this.addToCartBtnsLoc = page.locator("#recommended-item-carousel .add-to-cart");
    this.continueShoppingBtnLoc = page.locator(".close-modal");
    this.viewCartBtnLoc = page.locator("p a[href*='view_cart']");
  }

  async getFeatureTitle(): Promise<string> {
    try {
      return (await this.featureTitleLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in featureTitle:", error);
      return "Error in featureTitle";
    }
  }

  async getRecommendedTitle(): Promise<string> {
    try {
      return (await this.recommendedTitleLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in recommendedTitle:", error);
      return "Error in recommendedTitle";
    }
  }

  async cartByIndexRecommendedItems(index: number): Promise<void> {
    try {
      await this.addToCartBtnsLoc.nth(index).click();
    } catch (error) {
      console.error("Exception in cartByIndexRecommendedItems: ", error);
    }
  }

  async addProductToCart(productName: string): Promise<void> {
    try {
      const addtoCartBtn = this.page.locator(`.recommended_items:has(p:has-text("${productName}")) .add-to-cart`);
      await addtoCartBtn.first().click();
    } catch (error) {
      console.error("Exception in addProductToCart: ", error);
    }
  }

  async getPriceByProductName(productName: string): Promise<string> {
    try {
      const priceLocator = this.page.locator(
        `.recommended_items .productinfo.text-center:has(p:has-text("${productName}")) h2`
      );
      const priceText = await priceLocator.first().textContent();
      return priceText?.trim() ?? "";
    } catch (error) {
      console.error(`Exception in getPriceByProductName for "${productName}":`, error);
      return "Error in getPriceByProductName";
    }
  }

  async continueShopping(): Promise<void> {
    try {
      await this.continueShoppingBtnLoc.click();
    } catch (error) {
      console.error("Exception in continueShopping: ", error);
    }
  }

  async viewCart(): Promise<void> {
    try {
      await this.viewCartBtnLoc.click();
    } catch (error) {
      console.error("Exception in viewCart: ", error);
    }
  }
}
