import { type NextApiRequest, type NextApiResponse } from "next";
import puppeteer, { type PDFOptions } from "puppeteer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      process.platform === "win32"
        ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
        : process.platform === "linux"
          ? "/usr/bin/chromium-browser"
          : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: [
      "--no-sandbox",
      "--headless",
      "--disable-gpu",
      "--disable-dev-shm-usage",
    ],
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 0 });

  await page.goto(`${process.env.NEXTAUTH_URL}/pdf/test`);

  const pdfOption: PDFOptions = {
    printBackground: true,
    format: "A4",
  };

  const pdf = await page.pdf(pdfOption);

  await page.close();
  await browser.close();

  //   set file name
  res.setHeader("Content-Disposition", `inline; filename="test.pdf"`);
  res.setHeader("Content-Type", "application/pdf");
  res.send(pdf);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
