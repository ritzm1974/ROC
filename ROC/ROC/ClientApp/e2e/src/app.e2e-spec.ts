// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';

describe('ROC App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: ROC', async () => {
    await page.navigateTo();
    expect(await page.getAppTitle()).toEqual('ROC');
  });
});
