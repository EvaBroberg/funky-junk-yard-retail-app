import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

import Logo from '../../../src/assets/logo.png'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <img className='logo' src={Logo}></img>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>

            { currentUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className='option' to='/signin'>SIGN IN</Link>) }

        </div>
    </div>
);

export default Header;