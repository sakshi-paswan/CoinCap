
import './navBar.css'
import navlogo from '../../Assets/coincap-logo.svg'
import { Settings } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import SearchInput from '../../Components/SearchInput/SearchInput'

export default function NavBar() {
    return (
        <div className='navbar-container flex-row-center'>
            <div className="nav-Link flex-row-start align-center">
                <Link to=''>Coin</Link>
                <Link to=''>Exchange</Link>
                <Link to=''>Swap</Link>
            </div>
            <div className="nav-image align-center">
                <img src={navlogo} alt='logo' />
            </div>
            <div className="nav-buttons flex-row-center g-2">
                <div className="nav-icon align-center row g-2">
                    <SearchInput />
                    <button><Settings /></button>
                </div>
                <div className="nav-button-wallete">
                    <button>Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}
