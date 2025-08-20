import { Locator, Page } from "@playwright/test";

export class BrandPage {
  private readonly page: Page;

  // Brands
  private readonly poloBrandLoc: Locator;
  private readonly hnmBrandLoc: Locator;
  private readonly madameBrandLoc: Locator;
  private readonly masterHarbourBrandLoc: Locator;
  private readonly babyHugBrandLoc: Locator;
  private readonly allenSollyJrBrandLoc: Locator;
  private readonly kookieKidsBrandLoc: Locator;
  private readonly bibaBrandLoc: Locator;
  constructor(page: Page) {
    this.page = page;

    //  Left sidebar - Brands
    this.poloBrandLoc = page.locator("");
    this.hnmBrandLoc = page.locator("");
    this.madameBrandLoc = page.locator("");
    this.masterHarbourBrandLoc = page.locator("");
    this.babyHugBrandLoc = page.locator("");
    this.allenSollyJrBrandLoc = page.locator("");
    this.kookieKidsBrandLoc = page.locator("");
    this.bibaBrandLoc = page.locator("");
  }

  async poloBrandSideMenu(): Promise<string> {
    try {
      await this.poloBrandLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in poloBrandSideMenu: ", error);
      return "";
    }
  }

  async hnmBrandSideMenu(): Promise<string> {
    try {
      await this.hnmBrandLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in hnmBrandSideMenu: ", error);
      return "";
    }
  }

  async madameBrandSideMenu(): Promise<string> {
    try {
      await this.madameBrandLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in madameBrandSideMenu: ", error);
      return "";
    }
  }

  async mastHarbourBrandSideMenu(): Promise<string> {
    try {
      await this.masterHarbourBrandLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in mastHarbourBrandSideMenu: ", error);
      return "";
    }
  }

  async babyHugBrandSideMenu(): Promise<string> {
    try {
      await this.babyHugBrandLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in babyHugBrandSideMenu: ", error);
      return "";
    }
  }

  async allenSollyJrBrandSideMenu(): Promise<string> {
    try {
      await this.allenSollyJrBrandLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in allenSollyJrBrandSideMenu: ", error);
      return "";
    }
  }

  async kookieKidsBrandSideMenu(): Promise<string> {
    try {
      await this.kookieKidsBrandLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in kookieKidsBrandSideMenu: ", error);
      return "";
    }
  }

  async bibaBrandSideMenu(): Promise<string> {
    try {
      await this.bibaBrandLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in bibaBrandSideMenu: ", error);
      return "";
    }
  }
}
