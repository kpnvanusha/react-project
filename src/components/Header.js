import { useState } from 'react';
import {logo} from '../../assets/app-logo.png';
const Header = () => {
    const [loginText,setLoginText] = useState('Login');
    const updateLoginText = () => {
        loginText === 'Login' ? setLoginText('Logout') : setLoginText('Login');
    }
    return (
        <>
        <header className="header-component">
            <div className='logo-container'>
                <img src = {logo} alt='app logo' className='app-logo'></img>
            </div>
            <nav role='navigation' className='nav-container'>
                <ul className='header-nav'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About us</li>
                    <button className='login-btn' onClick={updateLoginText}>{loginText}</button>
                </ul>
               
            </nav>
        </header>
        </>
    )
}
export default Header;