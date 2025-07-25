import { Injectable } from '@nestjs/common';
import { BinanceRatesProvider } from '../providers/binance-rates.provider';

@Injectable()
export class CalculateExchangeRatesUsecase {

  constructor(
    private readonly ratesProvider: BinanceRatesProvider
  ) {}

  async execute(assetFrom: string, assetTo: string) {
    const pair = `${assetFrom}${assetTo}`;
    return this.ratesProvider.getTickers(pair);
  }
}
