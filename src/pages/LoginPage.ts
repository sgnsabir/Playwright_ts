import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;

  private readonly loginEmailLoc: Locator;
  private readonly loginPasswordLoc: Locator;
  private readonly loginButtonLoc: Locator;
  private readonly invalidLoginErrMsgLoc: Locator;

  private readonly signupNameLoc: Locator;
  private readonly signupEmailLoc: Locator;
  private readonly signupButtonLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginEmailLoc = page.locator("[data-qa*='login-email']");
    this.loginPasswordLoc = page.locator("[data-qa*='login-password']");
    this.loginButtonLoc = page.locator("[data-qa*='login-button']");
    this.invalidLoginErrMsgLoc = page.locator("p[style*='color']");
    this.signupNameLoc = page.locator("[name='name']");
    this.signupEmailLoc = page.locator("[data-qa*='signup-email']");
    this.signupButtonLoc = page.locator("[data-qa*='signup-button']");
  }

  async fillLoginEmail(email: string): Promise<void> {
    try {
      await this.loginEmailLoc.fill(email);
    } catch (error) {
      console.error("Exception in fillLoginEmail: ", error);
    }
  }

  async fillLoginPassword(): Promise<void> {
    try {
      await this.loginPasswordLoc.click();
    } catch (error) {
      console.error("Exception in fillLoginPassword: ", error);
    }
  }

  async clickLoginButton(): Promise<void> {
    try {
      await this.loginButtonLoc.click();
    } catch (error) {
      console.error("Exception in clickLoginButton: ", error);
    }
  }

  async getInvalidActionErrorMsg(): Promise<string> {
    try {
      return (await this.invalidLoginErrMsgLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getInvalidLoginErrorMsg:", error);
      return "Error in getInvalidLoginErrorMsg";
    }
  }

  async fillSignupName(name: string): Promise<void> {
    try {
      await this.signupNameLoc.fill(name);
    } catch (error) {
      console.error("Exception in fillSignupName: ", error);
    }
  }

  async fillSignupEmail(email: string): Promise<void> {
    try {
      await this.signupEmailLoc.fill(email);
    } catch (error) {
      console.error("Exception in fillSignupEmail: ", error);
    }
  }

  async clickSignupButton(): Promise<void> {
    try {
      await this.signupButtonLoc.click();
    } catch (error) {
      console.error("Exception in goToSignupPage: ", error);
    }
  }
}
