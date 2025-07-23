export class BinanceRatesProvider {

  private client: any;

  constructor(API_KEY: string, API_SECRET: string) {
    this.initSDK(API_KEY, API_SECRET);
  }

  async exchangeRates(pair: string): Promise<string> {
    // this.client.exchangeInfo(pair);
    return '0.18';
  }

  private initSDK(API_KEY: string, API_SECRET: string) {
    // TODO: implement Binance SDK
    // this.client = new Binance.Spot();
  }
}
