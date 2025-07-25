import { Module } from '@nestjs/common';
import { RatesController } from './controllers/rates.controller';
import { CalculateExchangeRatesUsecase } from './usecases/calculate-exchange-rates.usecase';
import { BinanceRatesProvider } from './providers/binance-rates.provider';

const USE_CASES = [
  CalculateExchangeRatesUsecase,
];

@Module({
  controllers: [
    RatesController,
  ],
  providers: [
    ...USE_CASES,
    BinanceRatesProvider,
  ]
})
export class MarketModule {

}
