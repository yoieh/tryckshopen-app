import { TryckshopenAppPage } from './app.po';

describe('tryckshopen-app App', () => {
  let page: TryckshopenAppPage;

  beforeEach(() => {
    page = new TryckshopenAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
