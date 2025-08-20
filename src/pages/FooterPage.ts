import { Locator, Page } from "@playwright/test";

class FooterPage {
  private readonly page: Page;

  private readonly subscriptionEmailLoc: Locator;
  private readonly subscribeButtonLoc: Locator;
  private readonly subscriptionconfirmationLoc: Locator;
  private readonly scrollButtonLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.subscriptionEmailLoc = page.locator("#susbscribe_email");
    this.subscribeButtonLoc = page.locator("#subscribe");
    this.subscriptionconfirmationLoc = page.locator(".alert-success.alert");
    this.scrollButtonLoc = page.locator("#scrollUp");
  }

  async subscriptionEmail(email: string): Promise<void> {
    try {
      await this.subscriptionEmailLoc.fill(email);
    } catch (error) {
      console.error("Exception in subscriptionEmail", error);
    }
  }

  async subscribeButton(): Promise<void> {
    try {
      await this.subscribeButtonLoc.click();
    } catch (error) {
      console.error("Exception in subscribeButton: ", error);
    }
  }

  async subscriptionConfirmation(): Promise<string> {
    try {
      return (await this.subscriptionconfirmationLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in subscriptionConfirmation:", error);
      return "Error in subscriptionConfirmation";
    }
  }

  async getScrollUpButtonDisplay(): Promise<string> {
    try {
      return await this.scrollButtonLoc.evaluate((el) => window.getComputedStyle(el).display);
    } catch (error) {
      console.error("Exception in getScrollUpButtonDisplay:", error);
      return "Error in getScrollUpButtonDisplay";
    }
  }

  async scrollUpButton(): Promise<void> {
    try {
      await this.scrollButtonLoc.click();
    } catch (error) {
      console.error("Exception in scrollUpButton: ", error);
    }
  }
}
