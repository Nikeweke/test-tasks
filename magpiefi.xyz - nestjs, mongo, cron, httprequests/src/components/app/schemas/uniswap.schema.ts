import { Schema } from 'mongoose';

const UniswapSchema = new Schema(
  {
    pair: {
      type: String,
      required: true,
      default: null,
    },
    token0: {
      type: String,
      required: true,
      default: null,
    },
    token1: {
      type: String,
      required: true,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'uniswaps',
  },
);

UniswapSchema.index({
  pair: 1,
});

export default UniswapSchema;