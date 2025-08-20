import { Download, expect, Locator, Page } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

export class PaymentPage {
  private readonly page: Page;

  private readonly nameOnCardLoc: Locator;
  private readonly cardNumberLoc: Locator;
  private readonly cvcNumberLoc: Locator;
  private readonly expiryMonthLoc: Locator;
  private readonly expiryYearLoc: Locator;
  private readonly payConfirmOrderLoc: Locator;
  private readonly orderPlacedtextLoc: Locator;
  private readonly congratulationTextLoc: Locator;
  private readonly downloadInvoiceLoc: Locator;
  private readonly continueShoppingLoc: Locator;
  constructor(page: Page) {
    this.page = page;
    this.nameOnCardLoc = page.locator("[name*='name_on_card']");
    this.cardNumberLoc = page.locator("[name*='card_number']");
    this.cvcNumberLoc = page.locator("[name*='cvc']");
    this.expiryMonthLoc = page.locator("[name*='expiry_month']");
    this.expiryYearLoc = page.locator("[name*='expiry_year']");
    this.payConfirmOrderLoc = page.locator("#submit");
    this.orderPlacedtextLoc = page.locator("h2.title");
    this.congratulationTextLoc = page.locator("p[style*='garamond']");
    this.downloadInvoiceLoc = page.locator("[href*='download']");
    this.continueShoppingLoc = page.locator("[data-qa='continue-button']");
  }

  async fillNameOnCard(name: string): Promise<void> {
    try {
      await this.nameOnCardLoc.fill(name);
    } catch (error) {
      console.error("Exception in nameOnCard: ", error);
    }
  }

  async fillCardNumber(cardNumber: string): Promise<void> {
    try {
      await this.cardNumberLoc.fill(cardNumber);
    } catch (error) {
      console.error("Exception in cardNumber: ", error);
    }
  }

  async fillCvcNumber(cvcNumber: string): Promise<void> {
    try {
      await this.cvcNumberLoc.fill(cvcNumber);
    } catch (error) {
      console.error("Exception in fillCvcNumber: ", error);
    }
  }

  async fillExpiryMonth(expiryMonth: string): Promise<void> {
    try {
      await this.expiryMonthLoc.fill(expiryMonth);
    } catch (error) {
      console.error("Exception in fillExpiryMonth: ", error);
    }
  }

  async fillExpiryYear(expiryYear: string): Promise<void> {
    try {
      await this.expiryYearLoc.fill(expiryYear);
    } catch (error) {
      console.error("Exception in fillExpiryYear: ", error);
    }
  }

  async payConfirmOrder(): Promise<void> {
    try {
      await this.payConfirmOrderLoc.click();
    } catch (error) {
      console.error("Exception in payConfirmOrder: ", error);
    }
  }

  async getOrderPlacedText(): Promise<string> {
    try {
      return (await this.orderPlacedtextLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getOrderPlacedText:", error);
      return "Error in getOrderPlacedText";
    }
  }

  async getCongratulationText(): Promise<string> {
    try {
      return (await this.congratulationTextLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getCongratulationText:", error);
      return "Error in getCongratulationText";
    }
  }

  async downloadInvoice(): Promise<void> {
    try {
      const downloadDir = path.join(process.cwd(), "downloads");
      fs.mkdirSync(downloadDir, { recursive: true });

      const [download] = await Promise.all([this.page.waitForEvent("download"), this.downloadInvoiceLoc.click()]);

      const filePath = path.join(downloadDir, download.suggestedFilename());
      await download.saveAs(filePath);

      expect(fs.existsSync(filePath)).toBeTruthy();
      fs.unlinkSync(filePath);
    } catch (error) {
      console.error("Exception in downloadInvoic: ", error);
    }
  }

  async continueShoppingBtn(): Promise<string> {
    try {
      this.continueShoppingLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in continueShoppingBtn:", error);
      return "Error in continueShoppingBtn";
    }
  }
}
