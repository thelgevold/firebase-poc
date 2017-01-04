import { FriendsListPage } from './app.po';

describe('friends-list App', function() {
  let page: FriendsListPage;

  beforeEach(() => {
    page = new FriendsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
