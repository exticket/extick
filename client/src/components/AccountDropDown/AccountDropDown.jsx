import React, {useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './AccountDropDown.css'
import LinkButton from '../../components/LinkButton';
import {Link} from 'react-router-dom';

export default function AccountDropDown() {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div className="icon-container">
            <AccountCircleIcon onMouseEnter={() => toggle()} className="account-icon" htmlColor="#5c5c5c" fontSize="large" />
            {isOpen && <div onMouseLeave={() => toggle()} className="account-dropdown">
                <Link onClick={() => toggle()} to="/sellers/myaccount"><LinkButton text="My Account" className="account-dropdown-link"/></Link>
                <Link onClick={() => toggle()} to="/sellers/mytickets"><LinkButton text="My Tickets" className="account-dropdown-link"/></Link>
                <Link onClick={() => toggle()} to="/sellers/myfavorites"><LinkButton text="My favorites" className="account-dropdown-link"/></Link>
            </div>}
        </div>
    )
}
