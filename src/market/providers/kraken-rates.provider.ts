export class KrakenRatesProvider {
  private BASE_API_URL = 'https://fake-kraken-api.binance.com';

  async getExchangeRate(pair: string): Promise<string> {
    // TODO: implement Kraken API
    return '0.18';
  }
}
