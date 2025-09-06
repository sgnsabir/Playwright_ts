import { expect, test } from "../fixtures/testSetup";

test.describe("End to End Registration flow testing", () => {
  //test.describe.configure({ timeout: 120_000 });

  test("Register using valid data in only mandatory field", async ({ homePage, loginPage, signupPage, page }) => {
    await homePage.clickSignupLoginMenu();
    await loginPage.fillSignupName(process.env.NAME!);
    await loginPage.fillSignupEmail(process.env.SIGNUP_EMAIL!);
    await loginPage.clickSignupButton();

    await signupPage.fillSignupPassword(process.env.USER_PASSWORD!);
    await signupPage.fillFirstNameField(process.env.FIRST_NAME!);
    await signupPage.fillLastNameField(process.env.LAST_NAME!);
    await signupPage.fillAddress1Field(process.env.ADDRESS1!);
    await signupPage.fillStateField("Nordland");
    await signupPage.fillCityField("Narvik");
    await signupPage.fillZipCodeField("12345");
    await signupPage.fillMobileNumberField("123456789");

    //we need to write all the test in the similar way, it's just an example.
  });
});
