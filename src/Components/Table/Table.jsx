import React, { useCallback, useEffect, useState } from 'react'
import './table.css'
import TableRow from './TableRow'
export default function Table({ limit }) {
  const [coins, setCoins] = useState([])
  const fetchCoins = useCallback(async (signal) => {
    fetch(`https://api.coincap.io/v2/assets?limit=${limit}`, { signal }).then(res => {
      res.json().then(data => {
        setCoins(data.data)
      })

    })
  }, [limit])
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const x = setInterval(() => fetchCoins(signal), 5000)
    return () => {
      controller.abort();
      clearInterval(x)

    }
  }, [fetchCoins])
  return (
    <>
      <div className="parent-table col aling-center flex-row-center">
        <div className="table-container">
          < div className='table-row'>
            <div className="table-content border-bottom">
              <p>Rank</p>
            </div>
            <div className="table-content border-bottom black">
              <p>Name</p>
            </div>
            <div className="table-content border-bottom black">
              <p>Price</p>
            </div>
            <div className="table-content border-bottom black">
              <p>Market Cap</p>
            </div>
            <div className="table-content border-bottom black">
              <p>VWAP(24Hr)</p>
            </div>
            <div className="table-content border-bottom black">
              <p>Supply</p>
            </div>
            <div className="table-content border-bottom black">
              <p>Volume(24Hr)</p>
            </div>
            <div className="table-content border-bottom black">
              <p>Change(Hr)</p>
            </div>
          </div>
          {coins.map((data) => (
            <TableRow {...data} />
          ))}
        </div>
      </div>
    </>
  )
}


