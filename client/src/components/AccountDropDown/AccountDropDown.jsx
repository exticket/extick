import React, {useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from  './AccountDropDown.module.css'
import LinkButton from '../../components/LinkButton';
import {Link} from 'react-router-dom';

export default function AccountDropDown() {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div className={styles.iconContainer}>
            <AccountCircleIcon onMouseEnter={() => toggle()} className={styles.accountIcon} htmlColor="#5c5c5c" fontSize="large" />
            {isOpen && <div onMouseLeave={() => toggle()} className={styles.accountDropdown}>
                <Link onClick={() => toggle()} to="/sellers/myaccount"><LinkButton text="My Account" className={styles.accountDropdownLink}/></Link>
                <Link onClick={() => toggle()} to="/sellers/mytickets"><LinkButton text="My Tickets" className={styles.accountDropdownLink}/></Link>
                <Link onClick={() => toggle()} to="/sellers/myfavorites"><LinkButton text="My favorites" className={styles.accountDropdownLink}/></Link>
            </div>}
        </div>
    )
}
