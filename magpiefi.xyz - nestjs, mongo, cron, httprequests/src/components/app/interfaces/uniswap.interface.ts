import { Document, Types } from 'mongoose';

// represent model of data in Uniswap table
export interface IUniswap extends Document {
  pair: string;
  token0: string;
  token1: string;
}