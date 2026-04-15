const puppeteer = require('puppeteer');
const path = require('path');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  page = await browser.newPage();
  const filePath = path.resolve(__dirname, '../index.html');
  await page.goto('file://' + filePath);
}, 30000);

afterAll(async () => {
  await browser.close();
});

test('La page contient un canvas', async () => {
  const canvas = await page.$('canvas');
  expect(canvas).not.toBeNull();
}, 10000);

test('Le titre de la page est défini', async () => {
  const title = await page.title();
  expect(title).toBeTruthy();
}, 10000);

test('La page contient un bouton de démarrage', async () => {
  const button = await page.$('#jogar-btn');
  expect(button).not.toBeNull();
}, 10000);