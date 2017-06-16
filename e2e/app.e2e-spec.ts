import { GalaxyGamerPage } from './app.po';

describe('galaxy-gamer App', () => {
  let page: GalaxyGamerPage;

  beforeEach(() => {
    page = new GalaxyGamerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
