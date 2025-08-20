import { Page, Locator } from "@playwright/test";

export class CartPage {
  private readonly page: Page;

  private readonly productsDetailsLoc: Locator;
  private readonly productsNameLoc: Locator;
  private readonly productCheckoutButtonLoc: Locator;
  private readonly registerLoginLoc: Locator;
  private readonly continueOnCartLoc: Locator;
  private readonly commentsAreaLoc: Locator;
  private readonly placeOrderLoc: Locator;
  private readonly cartProductsLoc: Locator;
  private readonly productsPriceLoc: Locator;
  private readonly productsQuantityLoc: Locator;
  private readonly finalPriceTotalLoc: Locator;
  private readonly removeFromCartButtonsLoc: Locator;
  private readonly customerNameLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsDetailsLoc = page.locator("[href*='product_details']");
    this.productsNameLoc = page.locator("[href*='product_details']");
    this.productCheckoutButtonLoc = page.locator(".check_out");
    this.registerLoginLoc = page.locator("p a[href*='login']");
    this.continueOnCartLoc = page.locator(".close-checkout-modal");
    this.commentsAreaLoc = page.locator(".form-control");
    this.placeOrderLoc = page.locator("[href*='payment']");
    this.cartProductsLoc = page.locator("[href*='product_details']");
    this.productsPriceLoc = page.locator("cart_price");
    this.productsQuantityLoc = page.locator("button.disabled");
    this.finalPriceTotalLoc = page.locator(".cart_total_price");
    this.removeFromCartButtonsLoc = page.locator(".cart_quantity_delete");
    this.customerNameLoc = page.locator("#address_delivery .address_firstname");
  }

  async removeFromCart(index: number): Promise<void> {
    try {
      await this.removeFromCartButtonsLoc.nth(index).click();
      await this.productsDetailsLoc.waitFor({ state: "visible" });
    } catch (error) {
      console.error("Exception in removeFromCart: ", error);
    }
  }

  async cartProductCount(): Promise<number> {
    try {
      return await this.productsNameLoc.count();
    } catch (error) {
      console.error("Exception in cartProductCount: ", error);
      return 0;
    }
  }

  async customersName(): Promise<string> {
    try {
      return (await this.customerNameLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in customersName: ", error);
      return `error`;
    }
  }

  async productName(index: number): Promise<string> {
    try {
      return (await this.productsNameLoc.nth(index).textContent()) ?? "";
    } catch (error) {
      console.error("Exception in productName", error);
      return `${error}`;
    }
  }

  async productIsDisplayed(productName: string): Promise<boolean> {
    try {
      await this.productsDetailsLoc.waitFor({ state: "visible" });
      const productTexts = await this.cartProductsLoc.allTextContents();
      return productTexts.some(
        (text) => text.trim().toLowerCase() === productName.toLowerCase()
      );
    } catch (error) {
      console.error("Exception in productIsDisplayed: ", error);
      return false;
    }
  }

  async productQuantity(index: number): Promise<number> {
    try {
      const quantityText = await this.productsQuantityLoc
        .nth(index)
        .textContent();
      return quantityText ? parseInt(quantityText.trim(), 10) : 0;
    } catch (error) {
      console.error("Exception in productQuantity: ", error);
      return 0;
    }
  }
  async productTotalPrice(index: number): Promise<number> {
    try {
      const total = parseFloat(
        (await this.finalPriceTotalLoc.nth(index).textContent()) ?? ""
      );
      const quantity = await this.productQuantity(index);
      return total * quantity;
    } catch (error) {
      console.error("Exception in productTotalPrice: ", error);
      return 0;
    }
  }

  async actualTotalAmount(index: number): Promise<number> {
    try {
      let count = await this.finalPriceTotalLoc.count();
      if (!count) return 0;

      const amountText =
        (await this.finalPriceTotalLoc.nth(count - 1).textContent())?.trim() ??
        "";
      return parseFloat(amountText.split(" ")[1]) || 0;
    } catch (error) {
      console.error("Exception in actualTotalAmount: ", error);
      return 0;
    }
  }

  async getExpectedTotalPrice(): Promise<number> {
    try {
      const count = await this.productsPriceLoc.count();
      const priceList = await Promise.all(
        Array.from({ length: count }).map(async (_, i) => {
          const priceText = await this.productsPriceLoc.nth(i).textContent();
          const price = parseFloat(priceText?.split("")[1] || "0");

          const quantity = await this.productQuantity(i);
          return price * quantity;
        })
      );
      return priceList.reduce((sum, val) => sum + val, 0);
    } catch (error) {
      console.error("Exception in getExpectedTotalPrice: ", error);
      return 0;
    }
  }

  async productCheckout(): Promise<void> {
    try {
      await this.productCheckoutButtonLoc.click();
    } catch (error) {
      console.error("Exception in productCheckout: ", error);
    }
  }

  async registerLoginPage(): Promise<void> {
    try {
      await this.registerLoginLoc.click();
    } catch (error) {
      console.error("Exception in registerLoginPage: ", error);
    }
  }

  async continueOnCart(): Promise<void> {
    try {
      await this.continueOnCartLoc.click();
    } catch (error) {
      console.error("Exception in continueOnCart: ", error);
    }
  }

  async commentsArea(myComment: string): Promise<void> {
    try {
      await this.commentsAreaLoc.fill(myComment);
    } catch (error) {
      console.error("Exception in commentsArea: ", error);
    }
  }

  async placeOrder(): Promise<void> {
    try {
      await this.placeOrderLoc.click();
    } catch (error) {
      console.error("Exception in placeOrder: ", error);
    }
  }
}
