import React, { useState } from 'react'
import Table from '../../Components/Table/Table'
import './landingPage.css'

export default function LandingPage() {
    const [limit, setLimit] = useState(50)
    return (
        <div className='landingpage-container col'>
            <div className="container-card flex-row-center align-center g-4">
                <div className="card-content col">
                    <h4>MARKET CAP</h4>
                    <p>$1.27T</p>
                </div>
                <div className="card-content col">
                    <h4>EXCHANGE VOL</h4>
                    <p>$39.07B</p>
                </div>
                <div className="card-content col">
                    <h4>ASSETS</h4>
                    <p>2,295</p>
                </div>
                <div className="card-content col">
                    <h4>EXCHANGES</h4>
                    <p>73</p>
                </div>
                <div className="card-content col">
                    <h4>MARKETS</h4>
                    <p>13,947</p>
                </div>
                <div className="card-content col">
                    <h4>BTC DOM INDEX</h4>
                    <p>30.3%</p>
                </div>
            </div>
            <div className="table">
                <Table limit={limit} />
            </div>
            <div className="button col flex-row-center align-center">
                <button onClick={() => setLimit(limit + 50)}>View More</button>
            </div>
        </div>
    )
}
