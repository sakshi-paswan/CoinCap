import React from 'react'
import usePrevious from '../../usePrevious';
import './table.css'
export default function TableRow({ rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr, symbol }) {
  const prev = usePrevious(priceUsd)
  return (
    <div className={`table-row ${prev <= priceUsd ? 'green' : 'red'}`}>
      <div className="table-content border-bottom">
        <p>{rank}</p>
      </div>
      <div className="table-content border-bottom flex-row-start g-0-5 font">
        <img src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt='symbol' />
        <div className="info font">
          <p>{name}</p>
          <p className='black'>{symbol}</p>
        </div>
      </div>
      <div className="table-content border-bottom font">
        <p>${convertCurrency(priceUsd)}</p>
      </div>
      <div className="table-content border-bottom font">
        <p>${convertCurrency(marketCapUsd)}</p>
      </div>
      <div className="table-content border-bottom font">
        <p>${convertCurrency(vwap24Hr)}</p>
      </div>
      <div className="table-content border-bottom font">
        <p>{convertCurrency(supply)}</p>
      </div>
      <div className="table-content border-bottom font">
        <p>${convertCurrency(volumeUsd24Hr)}</p>
      </div>
      <div className="table-content border-bottom font">
        <p>{convertCurrency(changePercent24Hr)}%</p>
      </div>
    </div>
  )
}
function convertCurrency(labelValue) {

  return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    : Math.abs(Number(labelValue)) >= 1.0e+6

      ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
      : Math.abs(Number(labelValue)).toFixed(2);

}

