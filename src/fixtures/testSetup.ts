import { test as baseTest, expect } from "@playwright/test";
import dotenv from "dotenv";
import {
  AccountCreatedPage,
  AccountDeletedPage,
  BannerPage,
  BrandPage,
  CartPage,
  CategoryPage,
  CheckoutPage,
  ContactUsPage,
  HomePage,
  LinksValidatorPage,
  LoginPage,
  PaymentPage,
  ProductDetailsPage,
  ProductsPage,
  RecommendedItemsPage,
  SearchPage,
  SignupPage,
  TestCasesPage,
  ConsentPopupHandler,
} from "./index";

dotenv.config();

type PageFixtures = {
  accountCreatedPage: AccountCreatedPage;
  accountDeletedPage: AccountDeletedPage;
  bannerPage: BannerPage;
  brandPage: BrandPage;
  cartPage: CartPage;
  categoryPage: CategoryPage;
  checkoutPage: CheckoutPage;
  contactUsPage: ContactUsPage;
  homePage: HomePage;
  linksValidatorPage: LinksValidatorPage;
  loginPage: LoginPage;
  paymentPage: PaymentPage;
  productDetailsPage: ProductDetailsPage;
  productsPage: ProductsPage;
  recommendedItemsPage: RecommendedItemsPage;
  searchPage: SearchPage;
  signupPage: SignupPage;
  testCasesPage: TestCasesPage;
};

export const test = baseTest.extend<PageFixtures>({
  page: async ({ page }, use) => {
    await page.goto("/");
    const consentHandler = new ConsentPopupHandler(page);
    await consentHandler.handle();
    await use(page);
    await page.context().clearCookies();
  },

  accountCreatedPage: async ({ page }, use) => await use(new AccountCreatedPage(page)),
  accountDeletedPage: async ({ page }, use) => await use(new AccountDeletedPage(page)),
  bannerPage: async ({ page }, use) => await use(new BannerPage(page)),
  brandPage: async ({ page }, use) => await use(new BrandPage(page)),
  cartPage: async ({ page }, use) => await use(new CartPage(page)),
  categoryPage: async ({ page }, use) => await use(new CategoryPage(page)),
  checkoutPage: async ({ page }, use) => await use(new CheckoutPage(page)),
  contactUsPage: async ({ page }, use) => await use(new ContactUsPage(page)),
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  linksValidatorPage: async ({ page }, use) => await use(new LinksValidatorPage(page)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  paymentPage: async ({ page }, use) => await use(new PaymentPage(page)),
  productDetailsPage: async ({ page }, use) => await use(new ProductDetailsPage(page)),
  productsPage: async ({ page }, use) => await use(new ProductsPage(page)),
  recommendedItemsPage: async ({ page }, use) => await use(new RecommendedItemsPage(page)),
  searchPage: async ({ page }, use) => await use(new SearchPage(page)),
  signupPage: async ({ page }, use) => await use(new SignupPage(page)),
  testCasesPage: async ({ page }, use) => await use(new TestCasesPage(page)),
});

export { expect };
