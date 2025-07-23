import { Module } from "@nestjs/common";
import { RatesController } from "./controllers/rates.controller";
import { CalculateExchangeRatesUsecase } from "./usecases/calculate-exchange-rates.usecase";

const USE_CASES = [
  CalculateExchangeRatesUsecase,
];

@Module({
  controllers: [
    RatesController,
  ],
  providers: [
    ...USE_CASES,
  ]
})
export class MarketModule {

}
