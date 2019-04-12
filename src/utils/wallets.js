import config from '../config'
import metamask from '../icons/metamask.svg'
import ledger from '../icons/ledger.svg'

const wallets = {
  'metamask': {
    icon: metamask,
    name: 'MetaMask',
    connection: {
      title: 'Login to MetaMask'
    },
    troubleshootConnectionLink: 'https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask-Part-1-'
  },
  'ledger': {
    icon: ledger,
    name: 'Ledger',
    connection: {
      title: 'On your ledger',
      description: 'Navigate to your Bitcoin account. Follow Ledger instructions to connect Bitcoin wallet'
    },
    troubleshootConnectionLink: 'https://support.ledger.com/hc/en-us/articles/115005195945'
  },
}

const walletsByAsset = {
  eth: ['metamask', 'ledger'],
  btc: ['ledger'],
  erc20: ['metamask', 'ledger']
}

function getAssetWallets (asset) {
  const assetConfig = config.assets[asset]
  return walletsByAsset[asset] || walletsByAsset[assetConfig.type]
}

export { wallets, getAssetWallets }
