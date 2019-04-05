import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import currencies from '../../utils/currencies'
import AssetsBG from './assets-bg.svg'
import './SwapPairPanel.css'

class SwapPairPanel extends Component {
  render () {
    const haveCurrency = currencies[this.props.haveCurrency]
    const wantCurrency = currencies[this.props.wantCurrency]
    const showHave = (!this.props.focusSide || this.props.focusSide === 'have')
    const showWant = (!this.props.focusSide || this.props.focusSide === 'want')
    return <div className='SwapPairPanel'>
      <div className='SwapPairPanel_assetContainer'>
        {showHave && <img
          src={haveCurrency.icon}
          className={classNames(
            'SwapPairPanel_asset',
            'SwapPairPanel_asset_left',
            {'SwapPairPanel_asset_interactive': this.props.onHaveClick}
          )}
          alt={haveCurrency.code}
          onClick={this.props.onHaveClick} />}
        {showWant && <img
          src={wantCurrency.icon}
          className={classNames(
            'SwapPairPanel_asset',
            'SwapPairPanel_asset_right',
            {'SwapPairPanel_asset_interactive': this.props.onHaveClick}
          )}
          alt={wantCurrency.code}
          onClick={this.props.onWantClick} />}
        <img src={AssetsBG} className='SwapPairPanel_assetsBG' alt='' />
        {this.props.icon && <img src={this.props.icon} className='SwapPairPanel_icon' onClick={(e) => this.props.onIconClick(e)} alt='' />}
      </div>
      <div className='SwapPairPanel_labels'>
        <h1 className={classNames(
          'SwapPairPanel_labels_have',
          {'SwapPairPanel_labels_have_faded': !showHave}
        )}>{this.props.haveLabel}</h1>
        <h1 className={classNames(
          'SwapPairPanel_labels_want',
          {'SwapPairPanel_labels_want_faded': !showWant}
        )}>{this.props.wantLabel}</h1>
      </div>
      { this.props.showCurrencyLabels && <div className='SwapPairPanel_currency_labels'>
        {showHave && <h4 className='SwapPairPanel_currency_labels_have'>{haveCurrency.code} {haveCurrency.name}</h4>}
        {showWant && <h4 className='SwapPairPanel_currency_labels_want'>{wantCurrency.code} {wantCurrency.name}</h4>}
      </div> }
    </div>
  }
}

SwapPairPanel.propTypes = {
  haveCurrency: PropTypes.string.isRequired,
  haveLabel: PropTypes.string.isRequired,
  onHaveClick: PropTypes.func,
  wantCurrency: PropTypes.string.isRequired,
  wantLabel: PropTypes.string.isRequired,
  onWantClick: PropTypes.func,
  icon: PropTypes.any,
  onIconClick: PropTypes.func,
  showCurrencyLabels: PropTypes.bool,
  focusSide: PropTypes.oneOf(['have', 'want'])
}

SwapPairPanel.defaultProps = {
  haveLabel: 'Have',
  wantLabel: 'Want'
}

export default SwapPairPanel
