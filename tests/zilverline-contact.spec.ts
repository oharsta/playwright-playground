import {test} from '@playwright/test';

test('zilverline-contact.spec.ts', async ({page}) => {
    await page.goto('https://www.zilverline.com/contact');
    await page.getByLabel('Bedrijfsnaam *').click();
    await page.getByLabel('Bedrijfsnaam *').fill('Ignore');
    await page.getByLabel('Bedrijfsnaam *').press('Tab');
    await page.getByLabel('Voornaam *').fill('Okke');
    await page.getByLabel('Voornaam *').press('Tab');
    await page.getByLabel('Achternaam *').fill('Harsta');
    await page.getByLabel('Achternaam *').press('Tab');
    await page.getByLabel('Email *').fill('oharsta@zilverline.com');
    await page.getByLabel('Email *').press('Tab');
    await page.getByLabel('Telefoonnummer *').fill('0611860174');
    await page.getByLabel('Bericht *').click();
    await page.getByLabel('Bericht *').fill('ignore - test');
    await page.getByRole('button', {name: 'Versturen'}).click();
});
