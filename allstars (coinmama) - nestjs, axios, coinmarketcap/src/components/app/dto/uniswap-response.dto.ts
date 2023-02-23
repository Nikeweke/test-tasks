interface IToken {
  id: string
  symbol: string
}

interface IPair {
  id: string;
  token0: IToken;
  token1: IToken;
}

export class UniswapResponseDto {
  data: {
    pairs: IPair[]
  }
}
