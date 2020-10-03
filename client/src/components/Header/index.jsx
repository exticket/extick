import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SellerContext from '../../SellerContext';
import HelloMsg from '../HelloMsg';
import LinkButton from '../LinkButton';
import LoginButton from '../LoginButton';
import Logo from '../Logo';


export default function Header() {
    const seller = useContext(SellerContext).seller;
    const pathname = useLocation().pathname;
    return (
        <header>
            <Logo />
            {seller ? <HelloMsg seller={seller} /> : (pathname !== '/sellers/login' && <LoginButton />)}
            {pathname !== '/sellers/login' && (
                <Link to={seller ? "/sellers/selltickets" : "/sellers/login"}>
                    <LinkButton className="sell-tickets-btn" url="/sellers/login" text="SELL TICKETS" />
                </Link>)
            }
        </header>
    )
}
