import { Controller, Get, Query } from '@nestjs/common';
import { CalculateExchangeRatesUsecase } from '../usecases/calculate-exchange-rates.usecase';

@Controller('rates')
export class RatesController {
  constructor(
    private readonly calculateExchangeRatesUsecase: CalculateExchangeRatesUsecase,
  ) {}

  @Get()
  async getExchangeRates(
    @Query('assetFrom') assetFrom: string,
    @Query('assetTo') assetTo: string,
  ) {
    const result = await this.calculateExchangeRatesUsecase.execute(
      assetFrom,
      assetTo,
    );
    return {
      result,
    };
  }
}
