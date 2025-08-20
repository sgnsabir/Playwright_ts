import { Locator, Page } from "@playwright/test";

export class CategoryPage {
  private readonly page: Page;

  // Left side bar - Women
  private readonly womenCategoryLoc: Locator;
  private readonly womenDressCategoryLoc: Locator;
  private readonly womenTopsCategoryLoc: Locator;
  private readonly womenSareeCategoryLoc: Locator;

  // Left side bar - Men
  private readonly menCategoryLoc: Locator;
  private readonly menTShirtCategoryLoc: Locator;
  private readonly menJeansCategoryLoc: Locator;

  // Left side bar - Kids
  private readonly kidsCategoryLoc: Locator;
  private readonly kidsDressCategoryLoc: Locator;
  private readonly kidsTopsCategoryLoc: Locator;

  constructor(page: Page) {
    this.page = page;

    // Left sidebar - Women
    this.womenCategoryLoc = page.locator("");
    this.womenDressCategoryLoc = page.locator("");
    this.womenTopsCategoryLoc = page.locator("");
    this.womenSareeCategoryLoc = page.locator("");

    // Left sidebar - Men
    this.menCategoryLoc = page.locator("");
    this.menTShirtCategoryLoc = page.locator("");
    this.menJeansCategoryLoc = page.locator("");

    // Left sidebar - Kids
    this.kidsCategoryLoc = page.locator("");
    this.kidsDressCategoryLoc = page.locator("");
    this.kidsTopsCategoryLoc = page.locator("");
  }

  async womenCategorySideMenu(): Promise<void> {
    try {
      await this.womenCategoryLoc.click();
    } catch (error) {
      console.error("Exception in womenCategorySideMenu: ", error);
    }
  }

  async womenDressSideMenu(): Promise<string> {
    try {
      await this.womenDressCategoryLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in womenDressSideMenu: ", error);
      return "";
    }
  }

  async womenTopsSideMenu(): Promise<string> {
    try {
      await this.womenTopsCategoryLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in womenTopsSideMenu: ", error);
      return "";
    }
  }

  async womenSareeSideMenu(): Promise<string> {
    try {
      await this.womenSareeCategoryLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in womenSareeCategory: ", error);
      return "";
    }
  }

  async menCategorySideMenu(): Promise<void> {
    try {
      await this.menCategoryLoc.click();
    } catch (error) {
      console.error("Exception in menSideMenu: ", error);
    }
  }

  async menTShirtSideMenu(): Promise<string> {
    try {
      await this.menTShirtCategoryLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in menTShirtSideMenu: ", error);
      return "";
    }
  }

  async menJeansSideMenu(): Promise<string> {
    try {
      await this.menJeansCategoryLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in menJeansSideMenu: ", error);
      return "";
    }
  }

  async kidsCategorySideMenu(): Promise<void> {
    try {
      await this.kidsCategoryLoc.click();
    } catch (error) {
      console.error("Exception in kidsCategorySideMenu: ", error);
    }
  }

  async kidsDressSideMenu(): Promise<string> {
    try {
      await this.kidsDressCategoryLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in kidsDressSideMenu: ", error);
      return "";
    }
  }

  async kidsTopsSideMenu(): Promise<string> {
    try {
      await this.kidsTopsCategoryLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in kidsTopsSideMenu: ", error);
      return "";
    }
  }
}
