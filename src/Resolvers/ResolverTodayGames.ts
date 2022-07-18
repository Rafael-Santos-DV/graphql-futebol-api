import { Arg, Query, Resolver } from 'type-graphql';
import ObjectTypeTodayGames from '../ObjectTypes/ObjectTypeTodayGames';
import Providers from '../Providers/Providers';
import { TypeTodayGame } from '../Types/TypeTodayGames';
import Browser from '../WebScraping/Browser';
import ScrapingFlashScoreTodayGames from '../WebScraping/Scrapings/ScrapingFlashScoreTadayGames';

@Resolver()
class ResolverTodayGames {
  @Query(() => [ObjectTypeTodayGames])
  async todayMatches(@Arg('country') country: string, @Arg('championship', () => String) championship: string): Promise<TypeTodayGame[]> {
    const browser = new Browser(Providers.flashScoreTodayMatches(country, championship));

    const WINDOW_DOCUMENT = await browser.startBrowser();

    const data = new ScrapingFlashScoreTodayGames(WINDOW_DOCUMENT.HTML).scrapingTodayGames();
    return data;
  }
}

export default ResolverTodayGames;
