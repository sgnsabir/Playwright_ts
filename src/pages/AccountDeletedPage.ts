import { Locator, Page } from "@playwright/test";

export class AccountDeletedPage {
  private readonly page: Page;
  private readonly accountDeletedTitleLoc: Locator;
  private readonly accountDeleteMessageLoc: Locator;
  private readonly continueBtnLoc: Locator;
  constructor(page: Page) {
    this.page = page;
    this.accountDeletedTitleLoc = page.locator("");
    this.accountDeleteMessageLoc = page.locator("h2[data-qa='account-deleted'] b");
    this.continueBtnLoc = page.locator("a[data-qa='continue-button']");
  }

  async getAccountDeletionConfirmationMsg(): Promise<string> {
    try {
      return (await this.accountDeleteMessageLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getAccountDeletionConfirmationMsg:", error);
      return "Error in getAccountDeletionConfirmationMsg";
    }
  }

  async clickContinueButton(): Promise<void> {
    try {
      await this.continueBtnLoc.click();
    } catch (error) {
      console.error("Exception in clickContinueButton: ", error);
    }
  }
}
