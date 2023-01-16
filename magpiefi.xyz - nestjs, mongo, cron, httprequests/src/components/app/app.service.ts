import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import CollectionsConstants from 'src/consts/collection.consts';
import { IUniswap } from './interfaces/uniswap.interface';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios'
import { map, lastValueFrom } from 'rxjs'
import { UniswapResponseDto } from './dto/uniswap-response.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  @InjectModel(CollectionsConstants.uniswaps)
  private readonly uniswapRepository: Model<IUniswap>

  getHello(): string {
    return 'Hello World!';
  }

  @Cron('* */30 * * * *')
  async handleCron() {
    console.log('here')
    const uniswapUrl = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2'
    const options = {
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    }
    const payload = {
      query: "{  pairs {    id    token0{ symbol, id }    token1{ symbol, id }  }  }"
    }

    try {
      // make request 
      const data: UniswapResponseDto = await lastValueFrom(
        this.httpService.post(uniswapUrl, JSON.stringify(payload), options).pipe(
          map(res => res.data)
        )
      );

      const promises = []
      for (let i = 0; i < data.data.pairs.length; i++) {
        let item = data.data.pairs[i]
        promises.push(
          this.uniswapRepository.updateOne(
            { pair: item.token0.symbol + item.token1.symbol },
            { 
              $set: { 
                token0: item.token0.id,
                token1: item.token1.id,
              }
            },
            { upsert: true }
          )
        )
      }    

      const result = await Promise.allSettled(promises)
      console.log(result);


    } catch(e) {
      console.log('---------------> Error')
      console.log(e)
    }
  }
}
