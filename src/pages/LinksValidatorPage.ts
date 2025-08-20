// pages/LinksValidatorPage.ts
import { expect, Page, APIResponse } from "@playwright/test";

export class LinksValidatorPage {
  constructor(private readonly page: Page) {}

  /**
   * Navigate to a given URL.
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

  /**
   * Returns all <a> tag href values from the current page.
   */
  async getAllLinks(): Promise<string[]> {
    const links = await this.page.$$eval("a", (anchors) =>
      anchors
        .map((a) => a.getAttribute("href"))
        .filter((href): href is string => !!href && !href.startsWith("javascript:"))
    );
    return Array.from(new Set(links)); // remove duplicates
  }

  /**
   * Validates each link: checks HTTP response and fetches page title.
   * Returns an array of results with status and title.
   */
  async validateLinks(links: string[]): Promise<{ url: string; status: number; title?: string }[]> {
    const results: { url: string; status: number; title?: string }[] = [];

    for (const link of links) {
      try {
        // Resolve relative links
        const absoluteUrl = new URL(link, this.page.url()).toString();

        // Use API request to check status
        const response: APIResponse = await this.page.request.get(absoluteUrl);
        const status = response.status();
        expect(status).toBeGreaterThanOrEqual(200);
        expect(status).toBeLessThan(400);

        // Navigate in a new page context to get the title without affecting current page
        const newPage = await this.page.context().newPage();
        await newPage.goto(absoluteUrl, { waitUntil: "domcontentloaded", timeout: 10000 });
        const title = await newPage.title();
        await newPage.close();

        results.push({ url: absoluteUrl, status, title });
      } catch (error) {
        results.push({ url: link, status: 0, title: `Error: ${(error as Error).message}` });
      }
    }
    return results;
  }
}
