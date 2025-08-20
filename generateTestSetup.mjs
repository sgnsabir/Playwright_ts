import fs from "fs";
import path from "path";

const indexPath = path.resolve("./src/fixtures/index.ts");
const setupPath = path.resolve("./src/fixtures/testSetup.ts");

function generateTestSetup() {
  const indexContent = fs.readFileSync(indexPath, "utf-8");

  // Extract page exports
  const pageExports = Array.from(indexContent.matchAll(/export\s+\{\s*([\w]+)\s*\}\s+from\s+"..\/pages\//g)).map(
    (match) => match[1]
  );

  // Extract utilities
  const utilsExports = Array.from(indexContent.matchAll(/export\s+\{\s*([\w]+)\s*\}\s+from\s+"..\/utils\//g)).map(
    (match) => match[1]
  );

  // Fixtures type definitions
  const fixtureTypes = pageExports.map((cls) => `  ${cls[0].toLowerCase()}${cls.slice(1)}: ${cls};`).join("\n");

  // Fixtures extend block
  const fixtureExtends = pageExports
    .map((cls) => `  ${cls[0].toLowerCase()}${cls.slice(1)}: async ({ page }, use) => await use(new ${cls}(page)),`)
    .join("\n");

  const setupContent = `import { test as baseTest, expect } from "@playwright/test";
import dotenv from "dotenv";
import {
${[...pageExports, ...utilsExports].map((cls) => `  ${cls},`).join("\n")}
} from "./index";

dotenv.config();

type PageFixtures = {
${fixtureTypes}
};

export const test = baseTest.extend<PageFixtures>({
  page: async ({ page }, use) => {
    const consentHandler = new ConsentPopupHandler(page);

    const handleConsent = async () => {
      try {
        await consentHandler.handle();
      } catch (error) {
        console.log("Consent handling skipped:", error);
      }
    };

    page.on("load", handleConsent);
    page.on("domcontentloaded", handleConsent);

    await use(page);

    page.off("load", handleConsent);
    page.off("domcontentloaded", handleConsent);
  },

${fixtureExtends}
});

export { expect };
`;

  fs.writeFileSync(setupPath, setupContent, "utf-8");
  console.log("✅ testSetup.ts regenerated successfully!");
}

// Initial run
generateTestSetup();

// Watch mode
fs.watch(indexPath, (eventType) => {
  if (eventType === "change") {
    console.log("🔄 index.ts changed. Regenerating testSetup.ts...");
    try {
      generateTestSetup();
    } catch (err) {
      console.error("❌ Failed to regenerate:", err);
    }
  }
});
