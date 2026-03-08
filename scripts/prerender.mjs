/**
 * Cross-platform prerender script for react-snap.
 * Auto-detects system Chrome on macOS and Linux/CI environments.
 */
import { run } from "react-snap";
import { existsSync } from "fs";

const CHROME_PATHS = [
  // Linux / GitHub Actions
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
  // macOS
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
];

function detectChrome() {
  for (const p of CHROME_PATHS) {
    if (existsSync(p)) {
      console.log(`react-snap: using Chrome at ${p}`);
      return p;
    }
  }
  // Let puppeteer use its bundled version as last resort
  console.warn("react-snap: no system Chrome found, falling back to bundled Chromium");
  return undefined;
}

const chromePath = detectChrome();

await run({
  source: "dist",
  inlineCss: false,
  skipThirdPartyRequests: true,
  concurrency: 1,
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  ...(chromePath ? { puppeteerExecutablePath: chromePath } : {}),
});
