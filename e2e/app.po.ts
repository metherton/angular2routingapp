import { browser, element, by } from 'protractor';

export class MyRouterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  lstStart() {
    return element(by.id('start'));
  }

  lstEnd() {
    return element(by.id('end'));
  }

}
