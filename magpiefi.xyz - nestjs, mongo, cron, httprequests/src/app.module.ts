import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios'

import { AppController } from './components/app/app.controller';
import { AppService } from './components/app/app.service';
import CollectionsConstants from './consts/collection.consts';
import UniswapSchema from './components/app/schemas/uniswap.schema';


const dotEnvPath = resolve(
  __dirname,
  `../${process.env.NODE_ENV || ''}.env`,
);
require('dotenv').config({ path: dotEnvPath });

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: CollectionsConstants.uniswaps,
        schema: UniswapSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
