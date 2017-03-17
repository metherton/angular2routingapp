import { MyRouterPage } from './app.po';

describe('my-router App', () => {
  let page: MyRouterPage;

  beforeEach(() => {
    page = new MyRouterPage();
  });

  xit('should display message saying Routing Application', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Routing Application');
  });

  it('should have two select boxes to choose start and end of journey', () => {
    page.navigateTo();
    expect(page.lstStart().isDisplayed()).toBeTruthy();
    expect(page.lstEnd().isDisplayed()).toBeTruthy();
  });


});
