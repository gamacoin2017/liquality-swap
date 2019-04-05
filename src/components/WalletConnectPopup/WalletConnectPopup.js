import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import WalletChoose from '../WalletChoose/WalletChoose'
import WalletConnecting from '../WalletConnecting/WalletConnecting'
import WalletConnected from '../WalletConnected/WalletConnected'
import { getAssetWallets } from '../../utils/wallets'

import './WalletConnectPopup.css'

class WalletConnectPopup extends Component {
  constructor (props) {
    super(props)

    this.chooseWallet = this.chooseWallet.bind(this)
    this.disconnectWallet = this.disconnectWallet.bind(this)
  }

  chooseWallet (wallet) {
    const { id, currency } = this.props
    this.props.chooseWallet(id, currency, wallet)
  }

  disconnectWallet () {
    const { id } = this.props
    this.props.disconnectWallet(id)
  }

  render () {
    const props = this.props
    let walletConnectBody

    if (props.walletConnected) {
      walletConnectBody = (
        <WalletConnected
          addresses={props.addresses}
          currency={props.currency}
          disconnectText='Disconnect'
          disconnectWallet={this.disconnectWallet}
          onOk={this.props.handleClose}
          wallet={props.wallet}
        />

      )
    } else if (props.walletChosen) {
      walletConnectBody = (
        <WalletConnecting
          cancelText='Cancel'
          cancelWallet={this.disconnectWallet}
          currency={props.currency}
          wallet={props.wallet} />
      )
    } else {
      walletConnectBody = (
        <WalletChoose
          title='Liquality'
          subTitle=''
          wallets={getAssetWallets(this.props.currency)}
          chooseWallet={this.chooseWallet}
          onCancel={this.props.handleClose}
          currency={props.currency} />
      )
    }

    return (
      <div>
        <Modal id={props.id} open={props.open} onClose={props.handleClose}>
          <div className='WalletConnectModal'>
            <div className='WalletConnectModal_body'>
              { walletConnectBody }
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

WalletConnectPopup.propTypes = {
  open: PropTypes.bool
}

WalletConnectPopup.defaultProps = {
  open: false
}

export default WalletConnectPopup
