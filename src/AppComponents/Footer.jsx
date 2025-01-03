/* eslint-disable react/prop-types */
import logo from './images/logo RealEstate.svg'
import { LuFacebook, LuInstagram, LuX } from 'react-icons/lu'
import NavClick from './NavClick'
import './css/Footer.css'

function Footer() {

    function Table({ heading, links }) {
        return (
            <table
                className='table-column'
                >
                <thead>
                    <tr>
                        <th style={{ fontWeight: 'bold', paddingBottom: '3px' }}>
                            {heading}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link, index) => (
                        <tr key={index} style={{ color: '#979797' }}>
                            <td><a href={link.url}>{link.label}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    const linksData = [
        { url: '/', label: 'Home' },
        { url: '/', label: 'About Us' },
        { url: '/', label: 'Services' },
        { url: '/', label: 'Contact' },
    ];

    return (
        <footer className="footer">
            <div className='footer-box'>
                <div className='footer-details'>
                    <h1>
                        Make your dreams a{' '}
                        <span className='gradient-text'>reality</span>
                    </h1>
                    <NavClick text='Reach out' color={true} />
                </div>
                <div>
                    <hr style={{ color: 'black', margin: '60px 0' }} />
                </div>
                <div className='logo-table'>
                    <div className='logo-icons'>
                        <div>
                            <img className='logo' src={logo} alt='logo' />
                        </div>
                        <div className='socials'>
                            <div>
                                <a href='/' aria-label='Facebook'>
                                    <LuFacebook size={24} />
                                </a>
                            </div>
                            <div>
                                <a href='/' aria-label='Instagram'>
                                    <LuInstagram size={24} />
                                </a>
                            </div>
                            <div>
                                <a href='/' aria-label='X (formerly Twitter)'>
                                    <LuX size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='table-for-links'>
                        <Table heading="Useful Links" links={linksData} />
                        <Table heading="Resources" links={linksData} />
                        <Table heading="Support" links={linksData} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

