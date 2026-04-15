import puppeteer, { Browser, Page } from 'puppeteer';
import * as path from 'path';

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  page = await browser.newPage();
  const filePath = path.resolve(__dirname, '../src/index.html');
  await page.goto('file://' + filePath);
}, 30000);

afterAll(async () => {
  await browser.close();
});

test('La page contient un élément canvas', async () => {
  const canvas = await page.$('canvas');
  expect(canvas).not.toBeNull();
}, 10000);

test('Le titre de la page est défini', async () => {
  const title = await page.title();
  expect(title).toBeTruthy();
}, 10000);

test('La page contient un bouton de démarrage', async () => {
  const button = await page.$('button, #start-button, input[type="button"]');
  expect(button).not.toBeNull();
}, 10000);