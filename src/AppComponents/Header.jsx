import NavClick from './NavClick';
import logo from './images/logo RealEstate.svg';
import { NavLink } from 'react-router-dom';
import { LuMenu } from 'react-icons/lu';
import './css/Header.css';
import { useState } from 'react';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header>
            <div>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <nav className={openMenu ? "open" : ""}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={`/listing/${4}`}>
                    <span style={{ color: 'orange' }}>Hot</span> Listing
                </NavLink>
                <NavLink to={'/listings'}>View Properties</NavLink>
                <div
                    className='work'
                    >
                    <NavClick
                            text='Work with us'
                            color={true}
                            nav='#contact'
                        />
                </div>
            </nav>
            <div
                className='browser-icon'
                onClick={() => setOpenMenu(!openMenu)}
                aria-label="Toggle menu" // Added for accessibility
            >
                <LuMenu size={50} />
            </div>
        </header>
    );
}

export default Header;
