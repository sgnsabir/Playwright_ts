import { Page, expect, Locator } from "@playwright/test";

export class HomePage {
  private readonly page: Page;

  // Menu Locators
  private readonly pageLogoLoc: Locator;
  private readonly homeIconLoc: Locator;
  private readonly linkProductsLoc: Locator;
  private readonly linkCartLoc: Locator;
  private readonly linkSignUpLoginLoc: Locator;
  private readonly logoutLoc: Locator;
  private readonly deleteAccountLoc: Locator;
  private readonly usernameLoc: Locator;
  private readonly linkTestCasesLoc: Locator;
  private readonly linkAPITestingLoc: Locator;
  private readonly linkVideoTutorialsLoc: Locator;
  private readonly linkContactUsLoc: Locator;
  private readonly linkConsentButtonLoc: Locator;
  private readonly bodyHeaderTitleLoc: Locator;

  // Misc
  private readonly leftSideMenuTitlesLoc: Locator;
  private readonly productsImageLoc: Locator;
  private readonly recommendedTitleLoc: Locator;

  constructor(page: Page) {
    this.page = page;

    // Menu bar
    this.pageLogoLoc = page.locator("a img");
    this.homeIconLoc = page.locator("i.fa-home");
    this.linkProductsLoc = page.locator("[href*='/products']");
    this.linkCartLoc = page.locator("[href*='/view_cart']");
    this.linkSignUpLoginLoc = page.locator("[href*='/login']");
    this.logoutLoc = page.locator("a[href='/logout']");
    this.deleteAccountLoc = page.locator("a[href='/delete_account']");
    this.usernameLoc = page.locator("b");
    this.linkTestCasesLoc = page.locator("[href*='/test_cases']");
    this.linkAPITestingLoc = page.locator("[href*='api_list']");
    this.linkVideoTutorialsLoc = page.locator("[href*='youtube']");
    this.linkContactUsLoc = page.locator("[href*='/contact_us']");
    this.linkConsentButtonLoc = page.locator("p.fc-button-label");
    this.bodyHeaderTitleLoc = page.locator(".features_items .title");

    // Miscellaneous
    this.leftSideMenuTitlesLoc = page.locator(".left-sidebar h2");
    this.productsImageLoc = page.locator("[src*='picture']");
    this.recommendedTitleLoc = page.locator(".recommended_items h2.title");
  }

  async productVisibility(): Promise<boolean> {
    try {
      return await this.productsImageLoc.nth(0).isVisible();
    } catch (error) {
      console.error("Exception in productVisibility: ", error);
      return false;
    }
  }

  async recommendedtitle(): Promise<string> {
    try {
      return (await this.recommendedTitleLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in recommendedtitle:", error);
      return "Error in recommendedtitle";
    }
  }

  async bodyHeadertitle(): Promise<string> {
    try {
      return (await this.bodyHeaderTitleLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in bodyHeadertitle:", error);
      return "Error in bodyHeadertitle";
    }
  }

  async categorySideBarTitle(): Promise<string> {
    try {
      return (await this.leftSideMenuTitlesLoc.nth(0).textContent()) ?? "";
    } catch (error) {
      console.error("Exception in categorySideBarTitle:", error);
      return "Error in categorySideBarTitle";
    }
  }

  async brandSideBarTitle(): Promise<string> {
    try {
      return (await this.leftSideMenuTitlesLoc.nth(1).textContent()) ?? "";
    } catch (error) {
      console.error("Exception in brandSideBarTitle:", error);
      return "Error in brandSideBarTitle";
    }
  }

  // Check if HomePage exists
  async isHomePageExists(): Promise<boolean> {
    try {
      await expect(this.page).toHaveTitle("Your Store");
      return true;
    } catch (error) {
      return false;
    }
  }

  async pageLogoMenu(): Promise<string> {
    try {
      await this.pageLogoLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in pageLogoMenu: ", error);
      return "";
    }
  }

  async homeMenu(): Promise<string> {
    try {
      await this.homeIconLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in homeMenu: ", error);
      return "";
    }
  }

  async productsMenu(): Promise<string> {
    try {
      await this.linkProductsLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in productsMenu: ", error);
      return "";
    }
  }

  async cartMenu(): Promise<string> {
    try {
      await this.linkCartLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in cartMenu: ", error);
      return "";
    }
  }

  async clickSignupLoginMenu(): Promise<string> {
    try {
      await this.linkSignUpLoginLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in signupLoginMenu: ", error);
      return "";
    }
  }

  async logoutBtn(): Promise<void> {
    try {
      await this.logoutLoc.click();
    } catch (error) {
      console.error("Exception in logoutBtn: ", error);
    }
  }

  async usernameIsDisplayed(username: string): Promise<boolean> {
    try {
      return (await this.usernameLoc.isVisible()) && (await this.usernameLoc.textContent()) === username;
    } catch (error) {
      console.error("Exception in usernameIsDisplayed: ", error);
      return false;
    }
  }

  async deleteAccountBtn(): Promise<void> {
    try {
      await this.deleteAccountLoc.click();
    } catch (error) {
      console.error("Exception in deleteAccountBtn: ", error);
    }
  }

  async testCasesManu(): Promise<string> {
    try {
      await this.linkTestCasesLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in testCasesManu: ", error);
      return "";
    }
  }

  async apiTestCasesMenu(): Promise<string> {
    try {
      await this.linkAPITestingLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in apiTestCasesMenu: ", error);
      return "";
    }
  }

  async videoTutorialsMenu(): Promise<string> {
    try {
      await this.linkVideoTutorialsLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in videoTutorialsMenu: ", error);
      return "";
    }
  }

  async contactUsMenu(): Promise<string> {
    try {
      await this.linkContactUsLoc.click();
      return await this.page.title();
    } catch (error) {
      console.error("Exception in contactUsMenu: ", error);
      return "";
    }
  }
}
