import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSeller } from '../../SellerContext';
import AccountDropDown from '../AccountDropDown';
import HelloMsg from '../HelloMsg';
import LinkButton from '../LinkButton';
import LoginButton from '../LoginButton';
import Logo from '../Logo';


export default function Header() {
    const hideSellTicketBtnPaths = [
        '/sellers/login',
        '/sellers/mytickets',
        '/sellers/selltickets'
    ]
    const { seller } = useSeller();
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

            {!hideSellTicketBtnPaths.includes(pathname) && (
                <Link to="/sellers/selltickets">
                    <LinkButton className="sell-tickets-btn" text="SELL TICKETS" />
                </Link>)
            }
        </header>
    )
}
