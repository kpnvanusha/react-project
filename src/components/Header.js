import { useState } from 'react';
//import {logo} from '../../assets/app-logo.png';
import { Link } from "react-router-dom";
const Header = () => {
    const [loginText,setLoginText] = useState('Login');
    const updateLoginText = () => {
        loginText === 'Login' ? setLoginText('Logout') : setLoginText('Login');
    }
    return (
        <>
        <header className="header-component">
            <div className='logo-container'>
                <img src = 'data:image/png;base64,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' alt='app logo' className='app-logo'></img>
            </div>
            <nav role='navigation' className='nav-container'>
                <ul className='header-nav'>
                    <li className='nav-item'><Link to='/' >Home</Link></li>
                    <li className='nav-item'><Link to='/aboutus' >About us</Link></li>
                    <li className='nav-item'><Link to='/contactus' >Contact us</Link></li>
                    <button className='login-btn' onClick={updateLoginText}>{loginText}</button>
                </ul>
               
            </nav>
        </header>
        </>
    )
}
export default Header;