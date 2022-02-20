import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const POLLING_INTERVAL = 12000

const RPC_URLS = {
  1: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  4: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
  1666600000: `https://harmony-0.gateway.pokt.network/v1/lb/${process.env.INFURA_KEY}`,
  1666700000: `https://harmony-0.gateway.pokt.network/v1/lb/${process.env.INFURA_KEY}`
}

export const metamask = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1666600000, 1666700000]
})

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  defaultChainId: 1
  //   pollingInterval: POLLING_INTERVAL
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
  //   pollingInterval: POLLING_INTERVAL
})
