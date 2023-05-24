import puppeteer from 'puppeteer';

const url = "https://example.com"
const funcArg = "hogepiyo"

const func = (arg) => { return `location is: ${window.location}, arg is: ${arg}` }
async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    const data = await page.evaluate(func, funcArg);

    console.log(`data: ${data}`)

    await browser.close();
}

main();