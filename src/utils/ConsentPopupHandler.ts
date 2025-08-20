// ConsentPopupHandler.ts
import { Locator, Page } from "@playwright/test";

export class ConsentPopupHandler {
  private popup: Locator;
  private acceptButton: Locator;

  constructor(private readonly page: Page) {
    // this.popup = page.locator(".fc-footer-buttons");
    this.acceptButton = page.locator("button.fc-cta-consent");
  }

  async handle() {
    try {
      // Wait for the popup container to be visible
      if (await this.acceptButton.isVisible({ timeout: 3000 })) {
        console.log("Consent popup found. Accepting...");

        // Click using the label text for reliability
        await this.acceptButton.click();

        // Verify closure instead of waiting arbitrarily
        await this.acceptButton.waitFor({ state: "hidden", timeout: 3000 });
      }
    } catch (error) {
      console.error("Consent handling failed:", error);
    }
  }
}
