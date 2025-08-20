import { test, expect } from "../fixtures/testSetup";

test.describe("Link Validation", () => {
  test.describe.configure({ timeout: 120_000 });

  test("should validate all links on the home page", async ({ linksValidatorPage }) => {
    const links = await linksValidatorPage.getAllLinks();
    expect(links.length).toBeGreaterThan(0);

    const results = await linksValidatorPage.validateLinks(links);

    for (const { url, status, title } of results) {
      console.log(`URL: ${url} | Status: ${status} | Title: ${title}`);
      expect(status).toBeGreaterThanOrEqual(200);
      expect(status).toBeLessThan(400);
      expect(title && title.trim().length).toBeGreaterThan(0);
    }
  });
});
