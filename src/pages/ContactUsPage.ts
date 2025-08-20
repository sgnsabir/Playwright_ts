import { Locator, Page } from "@playwright/test";

export class ContactUsPage {
  private readonly page: Page;

  private readonly contactUsTitleLoc: Locator;
  private readonly getInTouchTitleLoc: Locator;
  private readonly nameFieldLoc: Locator;
  private readonly emailFieldLoc: Locator;
  private readonly subjectFieldLoc: Locator;
  private readonly messageTextFieldLoc: Locator;
  private readonly chooseFileButtonLoc: Locator;
  private readonly submitFormLoc: Locator;

  private readonly feedbackForUsTextLoc: Locator;
  private readonly contactEmailLoc: Locator;
  private readonly successMessageLoc: Locator;
  private readonly successButtonLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactUsTitleLoc = page.locator(".col-sm-12 .text-center");
    this.getInTouchTitleLoc = page.locator(".contact-form .text-center");
    this.nameFieldLoc = page.locator("[data-qa='name']");
    this.emailFieldLoc = page.locator("[data-qa='email']");
    this.subjectFieldLoc = page.locator("[data-qa='subject']");
    this.messageTextFieldLoc = page.locator("#message");
    this.chooseFileButtonLoc = page.locator("input[name='upload_file']");
    this.submitFormLoc = page.locator("input[type='submit']");

    this.feedbackForUsTextLoc = page.locator(".contact-info .text-center");
    this.contactEmailLoc = page.locator("u"); // feedback@automationexercise.com
    this.successMessageLoc = page.locator("div.status");
    this.successButtonLoc = page.locator("btn-success");
  }

  async feedbackForUsText(): Promise<string> {
    try {
      return (await this.feedbackForUsTextLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in feedbackForUsText:", error);
      return "Error in feedbackForUsText";
    }
  }

  async contactEmail(): Promise<string> {
    try {
      return (await this.contactEmailLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in contactEmail:", error);
      return "Error in contactEmail";
    }
  }

  async contactUsTitle(): Promise<string> {
    try {
      return (await this.contactEmailLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in contactUsTitle:", error);
      return "Error in contactUsTitle";
    }
  }

  async getInTouchTitle(): Promise<string> {
    try {
      return (await this.getInTouchTitleLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in getInTouchTitle:", error);
      return "Error in getInTouchTitle";
    }
  }

  async nameField(name: string): Promise<void> {
    try {
      await this.nameFieldLoc.fill(name);
    } catch (error) {
      console.error("Exception in nameField: ", error);
    }
  }

  async emailField(email: string): Promise<void> {
    try {
      await this.emailFieldLoc.fill(email);
    } catch (error) {
      console.error("Exception in emailField: ", error);
    }
  }

  async subjectField(subject: string): Promise<void> {
    try {
      await this.subjectFieldLoc.fill(subject);
    } catch (error) {
      console.error("Exception in subjectField: ", error);
    }
  }

  async messageTextField(message: string): Promise<void> {
    try {
      await this.messageTextFieldLoc.fill(message);
    } catch (error) {
      console.error("Exception in messageTextField: ", error);
    }
  }

  // <input type="file"> current case, I have created UploadFile utility, for other upload options not required for this project, just to demonstrate.
  async uploadFile(filePath: string): Promise<void> {
    try {
      await this.chooseFileButtonLoc.setInputFiles(filePath);
    } catch (error) {
      console.error("Exception in uploadFile", error);
    }
  }

  async submitForm(): Promise<void> {
    try {
      await this.submitFormLoc.click();
    } catch (error) {
      console.error("Exception in submitForm: ", error);
    }
  }

  async javascriptAlert(): Promise<void> {
    /**
     * await dialog.dismiss();
     * await dialog.accept("some text");
     */
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
  }

  async successMessage(): Promise<string> {
    try {
      return (await this.successMessageLoc.textContent()) ?? "";
    } catch (error) {
      console.error("Exception in successMessage:", error);
      return "Error in successMessage";
    }
  }

  async successButton(): Promise<void> {
    try {
      await this.successButtonLoc.click();
    } catch (error) {
      console.error("Exception in successButton: ", error);
    }
  }
}
