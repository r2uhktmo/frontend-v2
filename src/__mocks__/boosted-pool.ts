import { Pool, PoolType } from '@/services/pool/types';

export const BoostedPoolMock: Pool = {
  id: '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
  address: '0xa13a9247ea42d743238089903570127dda72fe44',
  poolType: PoolType.ComposableStable,
  swapFee: '0.00001',
  tokensList: [
    '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
    '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
    '0xa13a9247ea42d743238089903570127dda72fe44',
    '0xae37d54ae477268b9997d4161b96b8200755935c',
  ],
  totalLiquidity: '129582787.0890880814133041814085484',
  totalSwapVolume: '260432002.4421270620735632848253712',
  totalSwapFee: '4570.865566672696168181339511309256',
  totalShares: '129467502.524175958648827523',
  owner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  factory: '0xf9ac7b9df2b3454e841110cce5550bd5ac6f875f',
  createTime: 1662537668,
  symbol: 'bb-a-USD',
  name: 'Balancer Aave Boosted StablePool',
  tokens: [
    {
      address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
      balance: '34479736.617522694777495036',
      weight: '',
      priceRate: '1.001509189477538017',
      symbol: 'bb-a-USDT',
      decimals: 18,
      token: {
        latestUSDPrice: '1.07',
        pool: {
          id: '0x2f4eb100552ef93840d5adc30560e5513dfffacb000000000000000000000334',
          totalShares: '50000000000.123456789101112131',
          address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
          poolType: PoolType.AaveLinear,
          mainIndex: 1,
          tokens: [
            {
              address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
              balance: '5192296824054968.90984969956086889',
              weight: '',
              priceRate: '1',
              symbol: 'bb-a-USDT',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: {
                  id: '0x2f4eb100552ef93840d5adc30560e5513dfffacb000000000000000000000334',
                  totalShares: '50000000000.123456789101112131',
                  address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
                  poolType: PoolType.AaveLinear,
                  mainIndex: 1,
                  tokens: [
                    {
                      address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
                      balance: '5192296824054968.90984969956086889',
                      weight: '',
                      priceRate: '1',
                      symbol: 'bb-a-USDT',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0x2f4eb100552ef93840d5adc30560e5513dfffacb000000000000000000000334',
                          totalShares: '5192296824054968.90984969956086889',
                          address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                    {
                      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                      balance: '8160680.022892',
                      weight: '',
                      priceRate: '1',
                      symbol: 'USDT',
                      decimals: 6,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                    {
                      address: '0xf8fd466f12e236f4c96f7cce6c79eadb819abf58',
                      balance: '24095652.502028',
                      weight: '',
                      priceRate: '1',
                      symbol: 'aUSDT',
                      decimals: 6,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                  ],
                },
              },
            },
            {
              address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
              balance: '8160680.022892',
              weight: '',
              priceRate: '1',
              symbol: 'USDT',
              decimals: 6,
              token: {
                latestUSDPrice: '1.07',
                pool: null,
              },
            },
            {
              address: '0xf8fd466f12e236f4c96f7cce6c79eadb819abf58',
              balance: '24095652.502028',
              weight: '',
              priceRate: '1',
              symbol: 'aUSDT',
              decimals: 6,
              token: {
                latestUSDPrice: '1.07',
                pool: null,
              },
            },
          ],
        },
      },
    },
    {
      address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
      balance: '48297528.396152954450839259',
      weight: '',
      priceRate: '1.000582681372697502',
      symbol: 'bb-a-USDC',
      decimals: 18,
      token: {
        latestUSDPrice: '1.07',
        pool: {
          id: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83000000000000000000000336',
          totalShares: '50000000000.123456789101112131',
          address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
          poolType: PoolType.AaveLinear,
          mainIndex: 1,
          tokens: [
            {
              address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
              balance: '5192296810237052.479811202677320249',
              weight: '',
              priceRate: '1',
              symbol: 'bb-a-USDC',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: {
                  id: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83000000000000000000000336',
                  totalShares: '50000000000.123456789101112131',
                  address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
                  poolType: PoolType.AaveLinear,
                  mainIndex: 1,
                  tokens: [
                    {
                      address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
                      balance: '5192296810237052.479811202677320249',
                      weight: '',
                      priceRate: '1',
                      symbol: 'bb-a-USDC',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83000000000000000000000336',
                          totalShares: '50000000000.123456789101112131',
                          address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                    {
                      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                      balance: '17148799.021266',
                      weight: '',
                      priceRate: '1',
                      symbol: 'USDC',
                      decimals: 6,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                    {
                      address: '0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de',
                      balance: '28912716.694914',
                      weight: '',
                      priceRate: '1',
                      symbol: 'aUSDC',
                      decimals: 6,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                  ],
                },
              },
            },
            {
              address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              balance: '17148799.021266',
              weight: '',
              priceRate: '1',
              symbol: 'USDC',
              decimals: 6,
              token: {
                latestUSDPrice: '1.07',
                pool: null,
              },
            },
            {
              address: '0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de',
              balance: '28912716.694914',
              weight: '',
              priceRate: '1',
              symbol: 'aUSDC',
              decimals: 6,
              token: {
                latestUSDPrice: '1.07',
                pool: null,
              },
            },
          ],
        },
      },
    },
    {
      address: '0xa13a9247ea42d743238089903570127dda72fe44',
      balance: '2596148299831654.250907939521257593',
      weight: '',
      priceRate: '1',
      symbol: 'bb-a-USD',
      decimals: 18,
      token: {
        latestUSDPrice: '1.07',
        pool: {
          id: '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
          totalShares: '50000000000.123456789101112131',
          address: '0xa13a9247ea42d743238089903570127dda72fe44',
          poolType: PoolType.ComposableStable,
          mainIndex: 0,
          tokens: [
            {
              address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
              balance: '34479736.617522694777495036',
              weight: '',
              priceRate: '1.001509189477538017',
              symbol: 'bb-a-USDT',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: {
                  id: '0x2f4eb100552ef93840d5adc30560e5513dfffacb000000000000000000000334',
                  totalShares: '50000000000.123456789101112131',
                  address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
                  poolType: PoolType.AaveLinear,
                  mainIndex: 1,
                  tokens: [
                    {
                      address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
                      balance: '5192296824054968.90984969956086889',
                      weight: '',
                      priceRate: '1',
                      symbol: 'bb-a-USDT',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0x2f4eb100552ef93840d5adc30560e5513dfffacb000000000000000000000334',
                          totalShares: '50000000000.123456789101112131',
                          address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                    {
                      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                      balance: '8160680.022892',
                      weight: '',
                      priceRate: '1',
                      symbol: 'USDT',
                      decimals: 6,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                    {
                      address: '0xf8fd466f12e236f4c96f7cce6c79eadb819abf58',
                      balance: '24095652.502028',
                      weight: '',
                      priceRate: '1',
                      symbol: 'aUSDT',
                      decimals: 6,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                  ],
                },
              },
            },
            {
              address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
              balance: '48297528.396152954450839259',
              weight: '',
              priceRate: '1.000582681372697502',
              symbol: 'bb-a-USDC',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: {
                  id: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83000000000000000000000336',
                  totalShares: '50000000000.123456789101112131',
                  address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
                  poolType: PoolType.AaveLinear,
                  mainIndex: 1,
                  tokens: [
                    {
                      address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
                      balance: '5192296810237052.479811202677320249',
                      weight: '',
                      priceRate: '1',
                      symbol: 'bb-a-USDC',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83000000000000000000000336',
                          totalShares: '50000000000.123456789101112131',
                          address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                    {
                      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                      balance: '17148799.021266',
                      weight: '',
                      priceRate: '1',
                      symbol: 'USDC',
                      decimals: 6,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                    {
                      address: '0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de',
                      balance: '28912716.694914',
                      weight: '',
                      priceRate: '1',
                      symbol: 'aUSDC',
                      decimals: 6,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                  ],
                },
              },
            },
            {
              address: '0xa13a9247ea42d743238089903570127dda72fe44',
              balance: '2596148299831654.250907939521257593',
              weight: '',
              priceRate: '1',
              symbol: 'bb-a-USD',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: {
                  id: '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
                  totalShares: '50000000000.123456789101112131',
                  address: '0xa13a9247ea42d743238089903570127dda72fe44',
                  poolType: PoolType.ComposableStable,
                  mainIndex: 0,
                  tokens: [
                    {
                      address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
                      balance: '34479736.617522694777495036',
                      weight: '',
                      priceRate: '1.001509189477538017',
                      symbol: 'bb-a-USDT',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0x2f4eb100552ef93840d5adc30560e5513dfffacb000000000000000000000334',
                          totalShares: '50000000000.123456789101112131',
                          address: '0x2f4eb100552ef93840d5adc30560e5513dfffacb',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                    {
                      address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
                      balance: '48297528.396152954450839259',
                      weight: '',
                      priceRate: '1.000582681372697502',
                      symbol: 'bb-a-USDC',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83000000000000000000000336',
                          totalShares: '50000000000.123456789101112131',
                          address: '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                    {
                      address: '0xa13a9247ea42d743238089903570127dda72fe44',
                      balance: '2596148299831654.250907939521257593',
                      weight: '',
                      priceRate: '1',
                      symbol: 'bb-a-USD',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
                          totalShares: '50000000000.123456789101112131',
                          address: '0xa13a9247ea42d743238089903570127dda72fe44',
                          poolType: PoolType.ComposableStable,
                          mainIndex: 0,
                        },
                      },
                    },
                    {
                      address: '0xae37d54ae477268b9997d4161b96b8200755935c',
                      balance: '46694579.84496379152010581',
                      weight: '',
                      priceRate: '1.000900495809254379',
                      symbol: 'bb-a-DAI',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0xae37d54ae477268b9997d4161b96b8200755935c000000000000000000000337',
                          totalShares: '50000000000.123456789101112131',
                          address: '0xae37d54ae477268b9997d4161b96b8200755935c',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              address: '0xae37d54ae477268b9997d4161b96b8200755935c',
              balance: '46694579.84496379152010581',
              weight: '',
              priceRate: '1.000900495809254379',
              symbol: 'bb-a-DAI',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: {
                  id: '0xae37d54ae477268b9997d4161b96b8200755935c000000000000000000000337',
                  totalShares: '50000000000.123456789101112131',
                  address: '0xae37d54ae477268b9997d4161b96b8200755935c',
                  poolType: PoolType.AaveLinear,
                  mainIndex: 1,
                  tokens: [
                    {
                      address: '0x02d60b84491589974263d922d9cc7a3152618ef6',
                      balance: '25810645.481738532468751415',
                      weight: '',
                      priceRate: '1',
                      symbol: 'aDAI',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                    {
                      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
                      balance: '18947250.406313118060126743',
                      weight: '',
                      priceRate: '1',
                      symbol: 'DAI',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                    {
                      address: '0xae37d54ae477268b9997d4161b96b8200755935c',
                      balance: '5192296811840024.297289861038414986',
                      weight: '',
                      priceRate: '1',
                      symbol: 'bb-a-DAI',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0xae37d54ae477268b9997d4161b96b8200755935c000000000000000000000337',
                          totalShares: '50000000000.123456789101112131',
                          address: '0xae37d54ae477268b9997d4161b96b8200755935c',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
    {
      address: '0xae37d54ae477268b9997d4161b96b8200755935c',
      balance: '46694579.84496379152010581',
      weight: '',
      priceRate: '1.000900495809254379',
      symbol: 'bb-a-DAI',
      decimals: 18,
      token: {
        latestUSDPrice: '1.07',
        pool: {
          id: '0xae37d54ae477268b9997d4161b96b8200755935c000000000000000000000337',
          totalShares: '50000000000.123456789101112131',
          address: '0xae37d54ae477268b9997d4161b96b8200755935c',
          poolType: PoolType.AaveLinear,
          mainIndex: 1,
          tokens: [
            {
              address: '0x02d60b84491589974263d922d9cc7a3152618ef6',
              balance: '25810645.481738532468751415',
              weight: '',
              priceRate: '1',
              symbol: 'aDAI',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: null,
              },
            },
            {
              address: '0x6b175474e89094c44da98b954eedeac495271d0f',
              balance: '18947250.406313118060126743',
              weight: '',
              priceRate: '1',
              symbol: 'DAI',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: null,
              },
            },
            {
              address: '0xae37d54ae477268b9997d4161b96b8200755935c',
              balance: '5192296811840024.297289861038414986',
              weight: '',
              priceRate: '1',
              symbol: 'bb-a-DAI',
              decimals: 18,
              token: {
                latestUSDPrice: '1.07',
                pool: {
                  id: '0xae37d54ae477268b9997d4161b96b8200755935c000000000000000000000337',
                  totalShares: '50000000000.123456789101112131',
                  address: '0xae37d54ae477268b9997d4161b96b8200755935c',
                  poolType: PoolType.AaveLinear,
                  mainIndex: 1,
                  tokens: [
                    {
                      address: '0x02d60b84491589974263d922d9cc7a3152618ef6',
                      balance: '25810645.481738532468751415',
                      weight: '',
                      priceRate: '1',
                      symbol: 'aDAI',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                    {
                      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
                      balance: '18947250.406313118060126743',
                      weight: '',
                      priceRate: '1',
                      symbol: 'DAI',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: null,
                      },
                    },
                    {
                      address: '0xae37d54ae477268b9997d4161b96b8200755935c',
                      balance: '5192296811840024.297289861038414986',
                      weight: '',
                      priceRate: '1',
                      symbol: 'bb-a-DAI',
                      decimals: 18,
                      token: {
                        latestUSDPrice: '1.07',
                        pool: {
                          id: '0xae37d54ae477268b9997d4161b96b8200755935c000000000000000000000337',
                          totalShares: '50000000000.123456789101112131',
                          address: '0xae37d54ae477268b9997d4161b96b8200755935c',
                          poolType: PoolType.AaveLinear,
                          mainIndex: 1,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
  ],
  chainId: 0,
  poolTypeVersion: 0,
  protocolYieldFeeCache: '',
  swapEnabled: false,
  totalWeight: '',
  lowerTarget: '',
  upperTarget: '',
  protocolSwapFeeCache: '',
};
