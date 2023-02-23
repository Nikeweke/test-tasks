import { Controller, Get } from '@nestjs/common';
import { Param, Query } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  async getData(
    @Query('symbol') symbol: string,
  ): Promise<{result: number}> {
    const data = await this.appService.getCoinData(symbol);
    return { result: data.data[symbol][0].quote.USD.price  }
  }

}
