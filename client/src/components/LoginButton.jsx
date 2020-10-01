import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import LinkButton from '../components/LinkButton';

export default function LoginButton() {
    return (
        <div className="login-btn">
            <PersonIcon />
            <LinkButton text="Log In" url="/sellers/login"/>
        </div>
    )
}
