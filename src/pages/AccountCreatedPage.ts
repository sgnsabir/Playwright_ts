import { Locator, Page } from "@playwright/test";

export class AccountCreatedPage {
  private readonly page: Page;
  private readonly accountCreatedTitleLoc: Locator;
  private readonly accountCreatedMessageLoc: Locator;
  private readonly continueBtnLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountCreatedTitleLoc = page.locator("");
    this.accountCreatedMessageLoc = page.locator("h2[data-qa='account-created'] b");
    this.continueBtnLoc = page.locator("a[data-qa='continue-button']");
  }
}
