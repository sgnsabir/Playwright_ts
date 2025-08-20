import { Locator, Page } from "@playwright/test";

export class ProductsPage {
  private readonly page: Page;

  private readonly saleImageLoc: Locator;
  private readonly featureTitleLoc: Locator;
  private readonly productsNameLoc: Locator;
  private readonly productsPriceLoc: Locator;
  private readonly addToCartBtnsLoc: Locator;
  private readonly continueShoppingLoc: Locator;
  private readonly viewCartBtnLoc: Locator;
  private readonly productsDetailLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saleImageLoc = page.locator("#sale_image");
    this.featureTitleLoc = page.locator(".features_items h2.title");
    this.productsNameLoc = page.locator(".productinfo p");
    this.productsPriceLoc = page.locator(".productinfo h2");
    this.addToCartBtnsLoc = page.locator(".productinfo .add-to-cart");
    this.continueShoppingLoc = page.locator(".close-modal");
    this.viewCartBtnLoc = page.locator("p a[href*='view_cart']");
    this.productsDetailLoc = page.locator("[href*='product_details']");
  }

  async getProductsCount(): Promise<string | number> {
    try {
      return (await this.productsNameLoc.count()) ?? 0;
    } catch (error) {
      console.error("Exception in getProductsCount:", error);
      return "Error in getProductsCount";
    }
  }

  async getProductPrice(index: number): Promise<string> {
    try {
      return (await this.productsPriceLoc.textContent())?.split(" ")[1] ?? "";
    } catch (error) {
      console.error("Exception in getProductPrice:", error);
      return "Error in getProductPrice";
    }
  }

  async clickAddProductToCartByIndex(index: number): Promise<void> {
    try {
      await this.addToCartBtnsLoc.nth(index).click();
    } catch (error) {
      console.error("Exception in clickAddProductToCartByIndex: ", error);
    }
  }

  async clickAddProductToCartByName(productName: string): Promise<void> {
    try {
      await this.page.locator(".productinfo.text-center", { hasText: productName }).locator(".add-to-cart").click();
    } catch (error) {
      console.error("Exception in clickAddProductToCartByName:", error);
    }
  }

  async productNameByIndex(index: number): Promise<string> {
    try {
      return (await this.productsNameLoc.nth(index).textContent()) ?? "";
    } catch (error) {
      console.error("Exception in productNameByIndex:", error);
      return "Error in productNameByIndex";
    }
  }

  async gotoProductDetailsPageByIndex(index: number): Promise<string> {
    try {
      const productName = await this.productNameByIndex(index);
      await this.productsDetailLoc.click();
      await this.page.waitForLoadState("domcontentloaded");
      return productName;
    } catch (error) {
      console.error("Exception in gotoProductDetailsPageByIndex:", error);
      return "Error in gotoProductDetailsPageByIndex";
    }
  }

  async gotoProductDetailsPageByProductName(productName: string): Promise<void> {
    try {
      const productCard = this.page.locator(".product-image-wrapper", { hasText: productName });
      await productCard.locator("[href*='product_details']").click();
    } catch (error) {
      console.error("Exception in gotoProductDetailsPageByProductName: ", error);
    }
  }

  async saleImageIsVisible(): Promise<boolean> {
    try {
      return await this.saleImageLoc.isVisible();
    } catch (error) {
      console.error("Exception in saleImageIsVisible: ", error);
      return false;
    }
  }

  async getFeatureTitle(): Promise<string> {
    try {
      return (await this.featureTitleLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getFeatureTitle:", error);
      return "Error in getFeatureTitle";
    }
  }

  async clickContinueShopping(): Promise<void> {
    try {
      await this.continueShoppingLoc.click();
    } catch (error) {
      console.error("Exception in clickContinueShopping: ", error);
    }
  }

  async clickViewCart(): Promise<void> {
    try {
      await this.viewCartBtnLoc.click();
    } catch (error) {
      console.error("Exception in clickViewCart: ", error);
    }
  }
}
