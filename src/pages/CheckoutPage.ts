import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
  private readonly page: Page;

  private readonly addressDetailsTitleLoc: Locator;
  private readonly deliveryAdrsTitleLoc: Locator;
  private readonly deliveryAdrsNameLoc: Locator;
  private readonly deliveryAdrsPhoneNumberLoc: Locator;

  private readonly billingAdrsTitleLoc: Locator;
  private readonly billingAdrsNameLoc: Locator;
  private readonly billingAdrsPhoneNumberLoc: Locator;

  private readonly reviewOrderTitleLoc: Locator;

  private readonly productsNameLoc: Locator;
  private readonly productsCategoryLoc: Locator;
  private readonly productsPriceLoc: Locator;
  private readonly productQuantityLoc: Locator;
  private readonly productIndividualTotalLoc: Locator;
  private readonly productsTotalAmountLoc: Locator;
  private readonly commentsAreaLoc: Locator;
  private readonly placeOrderBtnLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressDetailsTitleLoc = page.locator("");
    this.deliveryAdrsTitleLoc = page.locator("");
    this.deliveryAdrsNameLoc = page.locator("");
    this.deliveryAdrsPhoneNumberLoc = page.locator("");
    this.billingAdrsTitleLoc = page.locator("");
    this.billingAdrsNameLoc = page.locator("");
    this.billingAdrsPhoneNumberLoc = page.locator("");
    this.reviewOrderTitleLoc = page.locator("");
    this.productsNameLoc = page.locator("");
    this.productsCategoryLoc = page.locator("");
    this.productsPriceLoc = page.locator("");
    this.productQuantityLoc = page.locator("");
    this.productIndividualTotalLoc = page.locator("");
    this.productsTotalAmountLoc = page.locator("");
    this.commentsAreaLoc = page.locator("");
    this.placeOrderBtnLoc = page.locator("");
  }
}
