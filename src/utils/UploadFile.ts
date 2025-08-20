import { Page, Locator } from "@playwright/test";
import fs from "fs";

/**
 * Utility class for simulating a drag-and-drop file upload.
 *
 * @param filePath - Can be a single file path `"path/to/file.png"`
 *                   or an array of file paths `["path/file1.png", "path/file2.jpg"]`
 * const filePaths: string[] = ["path/file1.png", "path/file2.jpg"];
 * @param dropZoneSelector - CSS selector for the drop zone element
 *
 * @use const uploader = new UploadFileViaChooser(page);await uploader.upload(filepath, locator);
 */
export class DragAndDropFile {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async upload(
    filePath: string | string[],
    dropZoneSelector: string
  ): Promise<void> {
    try {
      const files = Array.isArray(filePath) ? filePath : [filePath];
      const fileObjects = files.map((path) => {
        const fileName = path.split(/[/\\]/).pop() || "upload.file";
        return {
          name: fileName,
          mimeType: this.getMimeType(fileName),
          buffer: fs.readFileSync(path),
        };
      });

      await this.page.dispatchEvent(dropZoneSelector, "drop", {
        dataTransfer: { files: fileObjects },
      });
    } catch (error) {
      console.error("Exception in DragAndDropFile.upload", error);
    }
  }

  private getMimeType(fileName: string): string {
    const ext = fileName.split(".").pop()?.toLowerCase();
    const map: Record<string, string> = {
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      gif: "image/gif",
      txt: "text/plain",
      pdf: "application/pdf",
    };
    return map[ext || ""] || "application/octet-stream";
  }
}

/**
 * Utility class for uploading files via the system file chooser.
 *
 * @param filePath - Can be a single file path `"path/to/file.png"`
 *                   or an array of file paths `["path/file1.png", "path/file2.jpg"]`
 * @param buttonLocator - Locator or selector string for the button that triggers the file chooser
 */
export class UploadFileViaChooser {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async upload(
    filePath: string | string[],
    buttonLocator: Locator | string
  ): Promise<void> {
    try {
      const locator =
        typeof buttonLocator === "string"
          ? this.page.locator(buttonLocator)
          : buttonLocator;

      const [fileChooser] = await Promise.all([
        this.page.waitForEvent("filechooser"),
        locator.click(),
      ]);

      await fileChooser.setFiles(filePath);
    } catch (error) {
      console.error("Exception in UploadFileViaChooser.upload", error);
    }
  }
}
