import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import SellerContext from '../../SellerContext';
import HelloMsg from '../HelloMsg';
import LinkButton from '../LinkButton';
import LoginButton from '../LoginButton';
import Logo from '../Logo';


export default function Header() {
    const seller = useContext(SellerContext).seller;
    return (
        <header>
            <Logo />
            {seller ? <HelloMsg seller={seller}/> : <LoginButton />}
            {/* {!window.location.pathname.startsWith('/sellers') && <LoginButton />} */}
            {window.location.pathname === '/' && <Link to="/sellers/login"><LinkButton className="sell-tickets-btn" url="/sellers/login" text="SELL TICKETS"/></Link>}
        </header>
    )
}
