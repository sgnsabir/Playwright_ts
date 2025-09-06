// ConsentPopupHandler.ts
import { Locator, Page } from "@playwright/test";

export class ConsentPopupHandler {
  private readonly consentPopup: Locator;
  private readonly acceptButton: Locator;

  constructor(private readonly page: Page) {
    this.consentPopup = this.page.locator(".fc-consent-root");
    this.acceptButton = this.page.locator("button.fc-cta-consent");
  }

  async handle() {
    try {
      await this.consentPopup.waitFor({ state: "visible", timeout: 5000 });
      if (await this.acceptButton.isVisible()) {
        console.log("Consent popup found. Accepting...");
        await this.acceptButton.click();
        await this.consentPopup.waitFor({ state: "hidden", timeout: 3000 });
      }
    } catch (error) {
      if (error.message.includes("timeout")) {
        console.log("Consent popup did not appear within the timeout.");
      } else {
        console.error("Consent handling failed:", error);
      }
    }
  }
}
