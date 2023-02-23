import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import {AxiosResponse} from 'axios';
import { map, lastValueFrom } from 'rxjs'

interface ResponseDto {
  data: {
    BTC: [
      {
        quote: {
          USD: {
            price: number;
          }
        }
      }
    ]
  }
}

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  // @InjectModel(CollectionsConstants.uniswaps)
  // private readonly uniswapRepository: Model<IUniswap>

  getHello(): string {
    return 'Hello World!';
  }

  async getCoinData(symbol: string): Promise<ResponseDto> {
    let result = {} as ResponseDto
    const url = ' https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest'
    const options = {
      params: {
        'symbol': symbol,
        'CMC_PRO_API_KEY': ''
      }
    }

    try {
      result = await lastValueFrom(
        this.httpService.get(url, options).pipe(
          map((res: AxiosResponse<ResponseDto>) => res.data)
        )
      );

      return result

    } catch(e) {
      console.log(e)
      return result
    }
  }


  // @Cron('* */30 * * * *')
  // async handleCron() {
  //   const uniswapUrl = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2'
  //   const options = {
  //     headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  //   }
  //   const payload = {
  //     query: "{  pairs {    id    token0{ symbol, id }    token1{ symbol, id }  }  }"
  //   }

  //   try {
  //     const data: UniswapResponseDto = await lastValueFrom(
  //       this.httpService.post(uniswapUrl, JSON.stringify(payload), options).pipe(
  //         map(res => res.data)
  //       )
  //     );

  //     const promises = []
  //     for (let i = 0; i < data.data.pairs.length; i++) {
  //       let item = data.data.pairs[i]
  //       promises.push(
  //         this.uniswapRepository.updateOne(
  //           { pair: item.token0.symbol + item.token1.symbol },
  //           { 
  //             $set: { 
  //               token0: item.token0.id,
  //               token1: item.token1.id,
  //             }
  //           },
  //           { upsert: true }
  //         )
  //       )
  //     }    

  //     const result = await Promise.allSettled(promises)
  //     console.log(result);

  //   } catch(e) {
  //     console.log('---------------> Error')
  //     console.log(e)
  //   }
  // }
}
