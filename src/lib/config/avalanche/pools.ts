import { CSP_ISSUE_POOL_IDS } from '@/constants/pool-lists/csp-issue';
import { PoolWarning, Pools } from '@/types/pools';
import { Network } from '../types';

const pools: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: true,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: [
    'Weighted',
    'Stable',
    'MetaStable',
    'ComposableStable',
    'FX',
    'Gyro2',
    'Gyro3',
    'GyroE',
  ],
  Stable: {
    AllowList: [
      '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012', // Boosted Aave v3 USD
      '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013', // sAVAX/Boosted Aave v3 WAVAX
      '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014', // yyAVAX/Boosted Aave v3 WAVAX
      '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015', // ggAVAX/Boosted Aave v3 WAVAX
      '0x670734d704eb7ef424d75321670f921fbf42e9cf000000000000000000000016', // sAVAX-ankrAVAX
      '0xc13546b97b9b1b15372368dc06529d7191081f5b00000000000000000000001d', // ggAVAX/wavax
      '0xb26f0e66317846bd5fe0cbaa1d269f0efeb05c9600000000000000000000001e', // usdc/usdt
      '0xfd2620c9cfcec7d152467633b3b0ca338d3d78cc00000000000000000000001c', // sAVAX/wavax
      '0x9fa6ab3d78984a69e712730a2227f20bcc8b5ad900000000000000000000001f', // yyAVAX/wavax
      '0x121b0dfc48444c4d10cadded9885d90e7453e878000000000000000000000035', // SWEEP-USDC-BPT
      '0x8783e0156cd747d0cc012087d3d3afc897f2328c00000000000000000000003b', // sAVAX/ggAVAX/yyAVAX
      '0x5f8893506ddc4c271837187d14a9c87964a074dc000000000000000000000106', // wstETH/sfrxETH/rETH
    ],
  },
  Investment: {
    AllowList: [''],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [
      '0xe4a4565ad31a3af8286bc6e6dbb20ba76752557700010000000000000000000b',
      '0x3bde1563903ebb564ca37d5736afbb850929cfd7000200000000000000000017', // ankrAVAX-ankrETH
      '0x3396cca90c9335565ecdbae3a260dafb13a7959e000200000000000000000018', // BETS-sAVAX
      '0xb06fdbd2941d2f42d60accee85086198ac72923600020000000000000000001a', // HATCHY-WAVAX
      '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b', // btc/bbausd
      '0x96518f83d66bdc6a5812f01c54f8e022f6796399000200000000000000000020', // btc.b/usd
      '0x1f43a5286c57813f75fb8edeef8b2c5e1878ec2d000100000000000000000025', // 33BTC.b-33USDt-33USDC
      '0x3441a6f48f0f5a1ada460885df5b461deb2ee494000200000000000000000024', // 50BTC.b-50USDC
      '0x721bd1900aeabc29009b08e44be37529f518f2c2000100000000000000000026', // 33VCHF-33sAVAX-33VEUR
      '0xb10968b6ca2ea1c25d392a9a990559ed3f686861000200000000000000000028', // 80WAVAX-20USDC
      '0xab567c27450e3fa1b4ee4e67ca7d1003c49e7ea800020000000000000000002b', // 93BTC.b-7USDC
      '0x28f3a9e42667519c83cb090b5c4f6bd34e9f5569000200000000000000000031', // LP-VEUR-USDC
      '0x111440768a7e23b94f3771d1deaa33b10e05d3fd000200000000000000000036', // 50VEUR-50WAVAX
      '0x516db57bac67fcb68f26c885eacc4e842bd4cf5b000200000000000000000037', // 50BAL/50WAVAX
      '0xa39d8651689c8b6e5a9e0aa4362629aef2c58f55000200000000000000000038', // 80BAL/20WAVAX
      '0xb8a049353e647f29cf94f32b609bad6f67aff080000200000000000000000039', // 50BTC.b-50sAVAX
      '0x9dc0fe02e4619f4336a14f4689cc3bec63590ab600010000000000000000003a', // 30sAVAX-40JOE-30WAVAX
      '0xda479115800b16a271388f35cc3eac67fe4608ce00020000000000000000003c', // 50WAVAX-50FRACTION
      '0xf35d6c319ef5812f74b72670a3d74fa6fbd0a63200020000000000000000003d', // 20WAVAX-80EGS
      '0x9c74c167902cd1108fe3b76a9eb311c9ef9dd07400010000000000000000003e', // 40sAVAX-25ggAVAX-10WAVAX-25yyAVAX
      '0xc977f325be82198d57f5a24e8d78347a8684e3db000200000000000000000042', // 50KIMBO-50TECH
      '0x594fe86e60d8df04ec9c5b2f7fec09dc14175804000100000000000000000043', // 40KIMBO-13COQ-20TECH-14WAVAX-13USDC
      '0x26f28215c57dc22560be2efb09e784892802eb02000100000000000000000044', // 33XPOW-33APOW-33WAVAX
      '0x15365dad32910a37584233af9e28383ff276887a000100000000000000000045', // 14KIMBO-14COQ-14TECH-14NOCHILL-14WAVAX-14USDC-14GEC
      '0xaa4eee23426bff1af8d79d6179e5a5c311f6adcc000100000000000000000046', // KIMBOTECHCOQAVAXUSDC
      '0x0df1be54b29aa9828bea1de6a6dfe3d03ec63082000100000000000000000047', // AFCC
    ],
  },
  Factories: {
    '0x230a59f4d9adc147480f03b0d3fffecd56c3289a': 'weightedPool',
    '0x3b1eb8eb7b43882b385ab30533d9a2bef9052a98': 'composableStablePool',
    '0xe42ffa682a26ef8f25891db4882932711d42e467': 'composableStablePool',
    '0x81fe9e5b28da92ae949b705dfdb225f7a7cc5134': 'fx',
    '0x4042dc4110ea9500338737605a60065c3de152c6': 'fx',
  },
  Stakable: {
    VotingGaugePools: [
      '0x9fa6ab3d78984a69e712730a2227f20bcc8b5ad900000000000000000000001f',
      '0xfd2620c9cfcec7d152467633b3b0ca338d3d78cc00000000000000000000001c',
      '0xc13546b97b9b1b15372368dc06529d7191081f5b00000000000000000000001d',
      '0xb26f0e66317846bd5fe0cbaa1d269f0efeb05c9600000000000000000000001e',
      '0x55bec22f8f6c69137ceaf284d9b441db1b9bfedc000200000000000000000011', // USDC/EUROC
    ],
    AllowList: [
      '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014',
      '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013',
      '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012',
      '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015',
      '0x670734d704eb7ef424d75321670f921fbf42e9cf000000000000000000000016',
      '0x3bde1563903ebb564ca37d5736afbb850929cfd7000200000000000000000017',
      '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b', // 50BTC.b-50bb-a-USD
      '0x96518f83d66bdc6a5812f01c54f8e022f6796399000200000000000000000020',
      '0x721bd1900aeabc29009b08e44be37529f518f2c2000100000000000000000026',
      '0x670734d704eb7ef424d75321670f921fbf42e9cf000000000000000000000016',
      '0xad0e5e0778cac28f1ff459602b31351871b5754a000200000000000000000029',
      '0x66bb9d104c55861feb3ec3559433f01f6373c96600020000000000000000002a',
      '0x0099111ed107bdf0b05162356aee433514aac44000020000000000000000002f',
      '0x28f3a9e42667519c83cb090b5c4f6bd34e9f5569000200000000000000000031',
      '0x7a1a919c033ebc0d9f23cbf2aa41c24aef826ca200020000000000000000002e',
    ],
  },
  Metadata: {},
  Deep: [
    '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012', // Boosted Aave v3 USD
    '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013', // sAVAX/Boosted Aave v3 WAVAX
    '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014', // yyAVAX/Boosted Aave v3 WAVAX
    '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015', // ggAVAX/Boosted Aave v3 WAVAX
    '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b', // btc/bbausd
    '0x96518f83d66bdc6a5812f01c54f8e022f6796399000200000000000000000020', // btc.b/usd
  ],
  BoostedApr: [],
  DisabledJoins: [...CSP_ISSUE_POOL_IDS[Network.AVALANCHE]],
  Deprecated: {
    '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013': {
      newPool:
        '0xfd2620c9cfcec7d152467633b3b0ca338d3d78cc00000000000000000000001c',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015': {
      newPool:
        '0xc13546b97b9b1b15372368dc06529d7191081f5b00000000000000000000001d',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012': {
      newPool:
        '0xb26f0e66317846bd5fe0cbaa1d269f0efeb05c9600000000000000000000001e',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014': {
      newPool:
        '0x9fa6ab3d78984a69e712730a2227f20bcc8b5ad900000000000000000000001f',
      description: 'deprecatedPool.hasNewPool.description',
    },
    '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b': {
      newPool:
        '0x96518f83d66bdc6a5812f01c54f8e022f6796399000200000000000000000020',
      description: 'deprecatedPool.hasNewPool.description',
    },
  },
  GaugeMigration: {},
  BrandedRedirect: {
    FX: 'xave',
    Gyro2: 'gyro',
    Gyro3: 'gyro',
    GyroE: 'gyro',
  },
  Issues: {
    [PoolWarning.CspPoolVulnWarning]: CSP_ISSUE_POOL_IDS[Network.AVALANCHE],
    [PoolWarning.FxPoolVulnWarning]: [
      '0x55bec22f8f6c69137ceaf284d9b441db1b9bfedc000200000000000000000011',
      '0x66bb9d104c55861feb3ec3559433f01f6373c96600020000000000000000002a',
      '0xad0e5e0778cac28f1ff459602b31351871b5754a000200000000000000000029',
    ],
  },
};

export default pools;
