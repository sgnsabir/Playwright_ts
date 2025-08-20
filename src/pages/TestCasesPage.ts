import { expect, Locator, Page } from "@playwright/test";

export class TestCasesPage {
  private readonly page: Page;
  private readonly testcaseTitleLoc: Locator;
  private readonly testcasesLoc: Locator;
  private readonly testcasesCollpaseLoc: Locator;
  constructor(page: Page) {
    this.page = page;
    this.testcaseTitleLoc = page.locator(".title.text-center b");
    this.testcasesLoc = page.locator("a[data-toggle='collapse']");
    this.testcasesCollpaseLoc = page.locator(".collapsed");
  }

  async getTestCasesTitle(): Promise<string> {
    try {
      return (await this.testcaseTitleLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getTestCasesTitle:", error);
      return "Error in getTestCasesTitle";
    }
  }

  async testCaseIsCollapsed(): Promise<boolean> {
    try {
      expect(await this.testcasesCollpaseLoc.isHidden());
      await this.testcasesLoc.click();
      return await this.testcasesCollpaseLoc.isVisible();
    } catch (error) {
      console.error("Exception in testCaseIsCollapsed: ", error);
      return false;
    }
  }
}
