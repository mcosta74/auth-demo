import { LoginDemoPage } from './app.po';

describe('login-demo App', () => {
  let page: LoginDemoPage;

  beforeEach(() => {
    page = new LoginDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
