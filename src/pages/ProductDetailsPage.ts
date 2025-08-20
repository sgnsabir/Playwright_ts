import { Locator, Page } from "@playwright/test";
import { TestUtils } from "./../utils/TestUtils";

export class ProductDetailsPage {
  private readonly page: Page;
  private readonly utils: TestUtils;

  private readonly productImageLoc: Locator;
  private readonly newArrivalLoc: Locator;
  private readonly productNameInProductDetailsLoc: Locator;
  private readonly categoryLoc: Locator;
  private readonly productRatingLoc: Locator;
  private readonly productPriceDetailsLoc: Locator;
  private readonly quantityLoc: Locator;
  private readonly addToCartBtnLoc: Locator;
  private readonly availabilityStatusLoc: Locator;
  private readonly conditionStatusLoc: Locator;
  private readonly productBrandLoc: Locator;
  private readonly reviewTitleBarLoc: Locator;
  private readonly nameFieldLoc: Locator;
  private readonly emailFieldLoc: Locator;
  private readonly reviewTextAreaLoc: Locator;
  private readonly submitButtonLoc: Locator;
  private readonly thankingMsgLoc: Locator;
  private readonly continueShoppingOnAddedPopupLoc: Locator;
  private readonly viewCartOnAddedPopupLoc: Locator;
  constructor(page: Page) {
    this.page = page;
    this.utils = new TestUtils();

    this.productImageLoc = page.locator("[src*='picture']");
    this.newArrivalLoc = page.locator(".newarrival");
    this.productNameInProductDetailsLoc = page.locator(".product-information h2");
    this.categoryLoc = page.locator("//*[@class='product-information'] //p[1]");
    this.productRatingLoc = page.locator("[src*='rating']");
    this.productPriceDetailsLoc = page.locator(".col-sm-7 span:nth-child(1)");
    this.quantityLoc = page.locator("#quantity");
    this.addToCartBtnLoc = page.locator(".cart");
    this.availabilityStatusLoc = page.locator("xpath=//*[@class='product-information'] //p[2]");
    this.conditionStatusLoc = page.locator("xpath=//*[@class='product-information'] //p[3]");
    this.productBrandLoc = page.locator("//*[@class='product-information'] //p[4]");
    this.reviewTitleBarLoc = page.locator("[href='#reviews']");
    this.nameFieldLoc = page.locator("#name");
    this.emailFieldLoc = page.locator("#email");
    this.reviewTextAreaLoc = page.locator("#review");
    this.submitButtonLoc = page.locator("#button-review");
    this.thankingMsgLoc = page.locator("span[style*='20px']");
    this.continueShoppingOnAddedPopupLoc = page.locator(".btn-success");
    this.viewCartOnAddedPopupLoc = page.locator("u");
  }

  async productImageIsVisible(): Promise<boolean> {
    try {
      return await this.productImageLoc.isVisible();
    } catch (error) {
      console.error("Exception in productImageIsVisible: ", error);
      return false;
    }
  }

  async newArrivalIsVisible(): Promise<boolean> {
    try {
      return await this.newArrivalLoc.isEnabled();
    } catch (error) {
      console.error("Exception in newArrivalIsVisible: ", error);
      return false;
    }
  }

  async getProductNameInProductDetails(): Promise<string> {
    try {
      return (await this.productNameInProductDetailsLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getProductNameInProductDetails:", error);
      return "Error in getProductNameInProductDetails";
    }
  }

  async getCategoryText(): Promise<string> {
    try {
      return (await this.categoryLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getCategoryText:", error);
      return "Error in getCategoryText";
    }
  }

  async getProductPriceInDetails(): Promise<string> {
    try {
      return (await this.productPriceDetailsLoc.textContent())?.split(" ")[1] ?? "";
    } catch (error) {
      console.error("Exception in getProductPriceInDetails:", error);
      return "Error in getProductPriceInDetails";
    }
  }

  async setProductQuantity(quantity: string): Promise<void> {
    try {
      await this.quantityLoc.fill(quantity);
    } catch (error) {
      console.error("Exception in setProductQuantity: ", error);
    }
  }

  async getAvailablityStatus(): Promise<string> {
    try {
      return (await this.availabilityStatusLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getAvailablityStatus:", error);
      return "Error in getAvailablityStatus";
    }
  }

  async getConditionStatus(): Promise<string> {
    try {
      return (await this.conditionStatusLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getConditionStatus:", error);
      return "Error in getConditionStatus";
    }
  }

  async getProductBrand(): Promise<string> {
    try {
      return (await this.categoryLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getProductBrand:", error);
      return "Error in getProductBrand";
    }
  }

  async getReviewTitleBar(): Promise<string> {
    try {
      return (await this.reviewTitleBarLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getReviewTitleBar:", error);
      return "Error in getReviewTitleBar";
    }
  }

  async setNameField(name: string): Promise<void> {
    try {
      await this.nameFieldLoc.fill(name);
    } catch (error) {
      console.error("Exception in setNameField: ", error);
    }
  }

  async setEmailField(email: string): Promise<void> {
    try {
      await this.emailFieldLoc.fill(email);
    } catch (error) {
      console.error("Exception in setEmailField: ", error);
    }
  }

  async fillReviewText(reviewtext: string): Promise<void> {
    try {
      await this.reviewTextAreaLoc.fill(reviewtext);
    } catch (error) {
      console.error("Exception in fillReviewText: ", error);
    }
  }

  async getThankingMsg(): Promise<string> {
    try {
      return (await this.thankingMsgLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getThankingMsg:", error);
      return "Error in getThankingMsg";
    }
  }

  async clickAddToCartBtn(): Promise<void> {
    try {
      await this.addToCartBtnLoc.click();
    } catch (error) {
      console.error("Exception in clickAddToCartBtn: ", error);
    }
  }

  async clickContinueShopping(): Promise<void> {
    try {
      await this.continueShoppingOnAddedPopupLoc.click();
      await this.clickAddToCartBtn();
    } catch (error) {
      console.error("Exception in clickContinueShopping: ", error);
    }
  }

  async clickViewCart(): Promise<void> {
    try {
      await this.viewCartOnAddedPopupLoc.click();
    } catch (error) {
      console.error("Exception in clickViewCart: ", error);
    }
  }

  async clickSubmit(): Promise<void> {
    try {
      await this.submitButtonLoc.click();
    } catch (error) {
      console.error("Exception in clickSubmit: ", error);
    }
  }

  async getNameFieldRequiredMessage(): Promise<string> {
    try {
      return (await this.utils.getRequiredFieldMessage(this.nameFieldLoc)) ?? "";
    } catch (error) {
      console.error("Exception in getNameFieldRequiredMessage:", error);
      return "Error in getNameFieldRequiredMessage";
    }
  }

  async getEmailFieldRequiredMessage(): Promise<string> {
    try {
      return (await this.utils.getRequiredFieldMessage(this.emailFieldLoc)) ?? "";
    } catch (error) {
      console.error("Exception in getEmailFieldRequiredMessage:", error);
      return "Error in getEmailFieldRequiredMessage";
    }
  }
}
