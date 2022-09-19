import { Facebook, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import googlestore from '../../Assets/google.svg'
import applestore from '../../Assets/apple.svg'
import './footer.css'

export default function Footer() {
    return (
        <div className='footer-container flex-row-center align-start g-3'>
            <div className="coin-cap col text-left g-1">
                <h4>COINCAP.IP</h4>
                <div className="coincap-content g-0-3 col text-left link">
                    <Link to=''>Methelogy</Link>
                    <Link to=''>Support</Link>
                    <Link to=''>Our API</Link>
                    <Link to=''>Rate Comparison</Link>
                    <Link to=''>Career</Link>
                </div>
            </div>
            <div className="legal col text-left g-1">
                <h4>LEGALS</h4>
                <div className="legal-content col text-left link g-0-3">
                    <Link to=''>Team of service</Link>
                    <Link to=''>Privacy Policy</Link>
                </div>
                <h4>DISCLAIMER</h4>
                <p>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</p>
            </div>
            <div className="followus col align-start g-1">
                <h4>FOLLOW US</h4>
                <div className="row">
                    <div className="followUs-link row">
                        <Twitter />
                    </div>
                    <div className="followUs-link row">
                        <Facebook />
                    </div>
                </div>
            </div>
            <div className="download col-30 align-start g-1">
                <h4>COINCAP APP AVAILABLE ON</h4>
                <div className="store col g-0-3">
                    <img src={googlestore} alt='googlestore' />
                </div>
                <div className="store col g-0-5">
                    <img src={applestore} alt='applestore' />
                </div>
            </div>
        </div>
    )
}
