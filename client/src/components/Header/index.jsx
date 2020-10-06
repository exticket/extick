import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SellerContext from '../../SellerContext';
import AccountDropDown from '../AccountDropDown';
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
            {seller ?
                (<>
                    <AccountDropDown />
                    <HelloMsg seller={seller} />
                </>
                ) :
                (pathname !== '/sellers/login' && <LoginButton />)
            }

            {(pathname !== '/sellers/login' && pathname !== '/sellers/mytickets') && (
                <Link to={seller ? "/sellers/selltickets" : "/sellers/login"}>
                    <LinkButton className="sell-tickets-btn" text="SELL TICKETS" />
                </Link>)
            }
        </header>
    )
}
