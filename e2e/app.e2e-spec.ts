import { AknaPage } from './app.po';

describe('akna App', function() {
  let page: AknaPage;

  beforeEach(() => {
    page = new AknaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
