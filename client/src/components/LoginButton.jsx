import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import LinkButton from '../components/LinkButton';
import {Link} from 'react-router-dom';

export default function LoginButton() {
    return (
        <div className="header-log-area login-btn">
            <PersonIcon />
            <Link to="/sellers/login">
                <LinkButton text="Log In" url="/sellers/login" />
            </Link>
        </div>
    )
}
