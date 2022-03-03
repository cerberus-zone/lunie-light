export default {
  id: 'cerberus-testnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Cerberus Zone',
  description:
    'Cerberus is the first three-headed meme-coin coin to run in the Cosmos ecosystem',
  logo: `logo.png`,
  website: 'https://cerberus.zone',
  apiURL: 'http://localhost:8010/proxy', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'ws://34.123.30.100:26657',
  stakingDenom: 'CRBRUS',
  coinLookup: [
    {
      viewDenom: 'CRBRUS',
      chainDenom: 'ucrbrus',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/crbrus.png`,
    },
  ],
  addressPrefix: 'cerberus',
  validatorAddressPrefix: 'cerberusvaloper',
  validatorConsensusaddressPrefix: 'cerberusvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'CRBRUS',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
