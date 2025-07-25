export class BinanceRatesProvider {
  private BASE_API_URL = 'https://fake-api.binance.com';

  async getTickers(pair: string): Promise<string> {
    const url = `${this.BASE_API_URL}/api/v3/ticker/price?symbol=${pair}`;
    return fetch(url)
      .then((res) => res.json() as unknown as { price: string })
      .then((data) => data.price);
  }
}
