import { Locator } from "@playwright/test";

export class TestUtils {
  async getRequiredFieldMessage(fieldLoc: Locator): Promise<string> {
    try {
      return await fieldLoc.evaluate((el: HTMLInputElement) => el.validationMessage);
    } catch (error) {
      console.error("Exception in getRequiredFieldMessage:", error);
      return "";
    }
  }
}
