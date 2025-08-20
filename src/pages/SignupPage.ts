import { Locator, Page } from "@playwright/test";

export class SignupPage {
  private readonly page: Page;

  private readonly signupNameLoc: Locator;
  private readonly signupEmailLoc: Locator;
  private readonly signupButtonLoc: Locator;

  private readonly maleGenderLoc: Locator;
  private readonly femaleGenderLoc: Locator;
  private readonly signupPasswordLoc: Locator;

  private readonly daysSelectionField: Locator;
  private readonly monthsSelectionField: Locator;
  private readonly yearsSelectionField: Locator;

  private readonly newletterCheckboxLoc: Locator;
  private readonly offerCheckboxLoc: Locator;
  private readonly firstNameFieldLoc: Locator;
  private readonly lastNameFieldLoc: Locator;
  private readonly companyNameFieldLoc: Locator;
  private readonly address1FieldLoc: Locator;
  private readonly address2FieldLoc: Locator;
  private readonly countrySelectionLoc: Locator;
  private readonly stateFieldLoc: Locator;
  private readonly cityFieldLoc: Locator;
  private readonly zipcodeFieldLoc: Locator;
  private readonly mobileNumberFieldLoc: Locator;
  private readonly createAccountButtonLoc: Locator;
  constructor(page: Page) {
    this.page = page;
    this.signupNameLoc = page.locator("[name='name']"); //covered in Login page
    this.signupEmailLoc = page.locator("[data-qa='signup-email']"); //covered in Login page
    this.signupButtonLoc = page.locator("[data-qa='signup-button']"); //covered in Login page
    this.maleGenderLoc = page.locator("#uniform-id_gender1");
    this.femaleGenderLoc = page.locator("#uniform-id_gender2");
    this.signupPasswordLoc = page.locator("#password");

    this.daysSelectionField = page.locator("#days");
    this.monthsSelectionField = page.locator("#months");
    this.yearsSelectionField = page.locator("#years");

    this.newletterCheckboxLoc = page.locator("[for='newsletter']");
    this.offerCheckboxLoc = page.locator("#optin");
    this.firstNameFieldLoc = page.locator("#first_name");
    this.lastNameFieldLoc = page.locator("#last_name");
    this.companyNameFieldLoc = page.locator("#company");
    this.address1FieldLoc = page.locator("#address1");
    this.address2FieldLoc = page.locator("#address2");
    this.countrySelectionLoc = page.locator("#country");
    this.stateFieldLoc = page.locator("#state");
    this.cityFieldLoc = page.locator("#city");
    this.zipcodeFieldLoc = page.locator("#zipcode");
    this.mobileNumberFieldLoc = page.locator("#mobile_number");
    this.createAccountButtonLoc = page.locator("[data-qa='create-account']");
  }

  async selectMaleGender(): Promise<void> {
    try {
      await this.maleGenderLoc.click();
    } catch (error) {
      console.error("Exception in clickMaleGender: ", error);
    }
  }

  async selectFemaleGender(): Promise<void> {
    try {
      await this.femaleGenderLoc.click();
    } catch (error) {
      console.error("Exception in clickMaleGender: ", error);
    }
  }

  async fillSignupPassword(password: string): Promise<void> {
    try {
      await this.signupPasswordLoc.fill(password);
    } catch (error) {
      console.error("Exception in fillSignupPassword: ", error);
    }
  }

  async selectDateOfBirth(day: number, month: number, year: number): Promise<void> {
    try {
      await this.daysSelectionField.selectOption(day.toString());
      await this.monthsSelectionField.selectOption(month.toString());
      await this.yearsSelectionField.selectOption(year.toString());
    } catch (error) {
      console.error("Exception in selectDateOfBirth: ", error);
    }
  }

  async clickNewsLetterCheckbox(): Promise<void> {
    try {
      await this.newletterCheckboxLoc.click();
    } catch (error) {
      console.error("Exception in clickNewsLetterCheckbox: ", error);
    }
  }

  async clickOfferCheckbox(): Promise<void> {
    try {
      await this.offerCheckboxLoc.click();
    } catch (error) {
      console.error("Exception in clickOfferCheckbox: ", error);
    }
  }

  async fillFirstNameField(firstName: string): Promise<void> {
    try {
      await this.firstNameFieldLoc.fill(firstName);
    } catch (error) {
      console.error("Exception in fillFirstNameField: ", error);
    }
  }

  async fillLastNameField(lastName: string): Promise<void> {
    try {
      await this.lastNameFieldLoc.fill(lastName);
    } catch (error) {
      console.error("Exception in fillLastNameField: ", error);
    }
  }

  async fillCompanyNameField(companyName: string): Promise<void> {
    try {
      await this.companyNameFieldLoc.fill(companyName);
    } catch (error) {
      console.error("Exception in fillCompanyNameField: ", error);
    }
  }

  async fillAddress1Field(address1: string): Promise<void> {
    try {
      await this.address1FieldLoc.fill(address1);
    } catch (error) {
      console.error("Exception in fillAddress1Field: ", error);
    }
  }

  async fillAddress2Field(address2: string): Promise<void> {
    try {
      await this.address2FieldLoc.fill(address2);
    } catch (error) {
      console.error("Exception in fillAddress1Field: ", error);
    }
  }

  async fillCountrySelection(countryName: string): Promise<void> {
    try {
      await this.countrySelectionLoc.selectOption(countryName);
    } catch (error) {
      console.error("Exception in fillCountrySelection: ", error);
    }
  }

  async fillStateField(state: string): Promise<void> {
    try {
      await this.stateFieldLoc.fill(state);
    } catch (error) {
      console.error("Exception in fillStateField: ", error);
    }
  }

  async fillCityField(city: string): Promise<void> {
    try {
      await this.cityFieldLoc.fill(city);
    } catch (error) {
      console.error("Exception in fillCityFieldLoc: ", error);
    }
  }

  async fillZipCodeField(zipCode: string): Promise<void> {
    try {
      await this.zipcodeFieldLoc.fill(zipCode);
    } catch (error) {
      console.error("Exception in fillZipCodeField: ", error);
    }
  }

  async fillMobileNumberField(mobileNumber: string): Promise<void> {
    try {
      await this.mobileNumberFieldLoc.fill(mobileNumber);
    } catch (error) {
      console.error("Exception in fillMobileNumberField: ", error);
    }
  }

  async clickCreateAccountBtn(): Promise<void> {
    try {
      await this.createAccountButtonLoc.click();
    } catch (error) {
      console.error("Exception in clickCreateAccountBtn: ", error);
    }
  }
}
