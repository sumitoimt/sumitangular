import { AngularloginPage } from './app.po';

describe('angularlogin App', () => {
  let page: AngularloginPage;

  beforeEach(() => {
    page = new AngularloginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
