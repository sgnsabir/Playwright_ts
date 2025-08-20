import { Page, Locator } from "@playwright/test";

export class BannerPage {
  private readonly page: Page;

  private readonly sliderCarouselLoc: Locator;
  private readonly carouselIndicatorLoc: Locator;
  private readonly carousel1Loc: Locator;
  private readonly firstCarouselImageLoc: Locator;
  private readonly carousel2Loc: Locator;
  private readonly secondCarouselImageLoc: Locator;
  private readonly carousel3Loc: Locator;
  private readonly thirdCarouselImageLoc: Locator;
  private readonly leftArrowLoc: Locator;
  private readonly rightArrowLoc: Locator;
  private readonly carouselCardTitleLoc: Locator;
  private readonly testCaseButtonLoc: Locator;
  private readonly apiListButtonLoc: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sliderCarouselLoc = page.locator("#slider-carousel");
    this.carouselIndicatorLoc = page.locator(".carousel-indicators");

    this.carousel1Loc = page.locator("li[data-slide-to='0']");
    this.firstCarouselImageLoc = page.locator("[src*='girl1']");

    this.carousel2Loc = page.locator("li[data-slide-to='1']");
    this.secondCarouselImageLoc = page.locator("[src*='girl2']");

    this.carousel3Loc = page.locator("li[data-slide-to='2']");
    this.thirdCarouselImageLoc = page.locator("[src*='girl3']");

    this.leftArrowLoc = page.locator("#slider-carousel .fa-angle-left");
    this.rightArrowLoc = page.locator("#slider-carousel .fa-angle-right");

    this.carouselCardTitleLoc = page.locator(".active h1");
    this.testCaseButtonLoc = page.locator(".active [href*='test_cases']");
    this.apiListButtonLoc = page.locator(".active [href*='list']");
  }

  async slideCarouselIsAvailable(): Promise<boolean> {
    try {
      return await this.sliderCarouselLoc.isVisible();
    } catch (error) {
      console.error("Error in slideCarouselIsAvailable:", error);
      return false;
    }
  }

  async carouselIndicatorValidation(): Promise<boolean> {
    try {
      return await this.carouselIndicatorLoc.isVisible();
    } catch (error) {
      console.error("Error in carouselIndicatorValidation:", error);
      return false;
    }
  }

  async firstCarouselIsEnabled(): Promise<boolean> {
    try {
      await this.carousel1Loc.click();
      return await this.carousel1Loc.isEnabled();
    } catch (error) {
      console.error("Error in firstCarouselIsEnabled:", error);
      return false;
    }
  }

  async secondCarouselIsEnabled(): Promise<boolean> {
    try {
      await this.carousel2Loc.click();
      return await this.carousel2Loc.isEnabled();
    } catch (error) {
      console.error("Error in secondCarouselIsEnabled:", error);
      return false;
    }
  }

  async thirdCarouselIsEnabled(): Promise<boolean> {
    try {
      await this.carousel3Loc.click();
      return await this.carousel3Loc.isEnabled();
    } catch (error) {
      console.error("Error in thirdCarouselIsEnabled:", error);
      return false;
    }
  }

  async leftArrowValidation(): Promise<boolean> {
    try {
      await this.leftArrowLoc.click();
      return await this.leftArrowLoc.isEnabled();
    } catch (error) {
      console.error("Error in leftArrowValidation:", error);
      return false;
    }
  }

  async rightArrowValidation(): Promise<boolean> {
    try {
      await this.rightArrowLoc.click();
      return await this.rightArrowLoc.isEnabled();
    } catch (error) {
      console.error("Error in rightArrowValidation:", error);
      return false;
    }
  }

  async getCarouselCardTitle(): Promise<string> {
    try {
      return (await this.carouselCardTitleLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getCarouselCardTitle: ", error);
      return "";
    }
  }

  async testCasesButtonValidation(): Promise<string> {
    try {
      await this.testCaseButtonLoc.click();
      const title = this.page.title();
      await this.page.goBack();
      return title;
    } catch (error) {
      console.error("Exception in testCasesButtonValidation: ", error);
      return "";
    }
  }
  async apiListButtonValidation(): Promise<string> {
    try {
      await this.apiListButtonLoc.click();
      const title = await this.page.title();
      await this.page.goBack();
      return title;
    } catch (error) {
      console.log("Exception in apiListButtonValidation: ", error);
      return "";
    }
  }
}
