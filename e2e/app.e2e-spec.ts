import { GroceryPage } from './app.po';

describe('grocery App', () => {
  let page: GroceryPage;

  beforeEach(() => {
    page = new GroceryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
