import { RmGUIPage } from './app.po';

describe('rm-gui App', function() {
  let page: RmGUIPage;

  beforeEach(() => {
    page = new RmGUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
