const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const stamps = ['guadalajara', 'valencia', 'montreal', 'portland', 'cincinnati', 'san-francisco'];
const HEIGHT = 1200;

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  });

  for (const name of stamps) {
    const svgPath = path.join(__dirname, `${name}.svg`);
    const pngPath = path.join(__dirname, 'png', `${name}.png`);
    const svg = fs.readFileSync(svgPath, 'utf8');
    const b64 = Buffer.from(svg).toString('base64');

    const page = await browser.newPage({ viewport: { width: 1000, height: 1300 } });
    await page.setContent(`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:transparent">
      <img src="data:image/svg+xml;base64,${b64}" style="height:${HEIGHT}px"/>
    </body></html>`);
    await page.waitForTimeout(600);

    const img = await page.$('img');
    await img.screenshot({ path: pngPath, omitBackground: true });
    await page.close();
    console.log(`  ${name}.png (${HEIGHT}px)`);
  }

  await browser.close();
  console.log('\nAll PNGs rendered to stamps/png/');
})();
