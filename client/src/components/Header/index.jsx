import React from 'react'
import LinkButton from '../LinkButton'
import Logo from '../Logo'

export default function Header() {
    return (
        <header>
            <Logo />
            {window.location.pathname === '/' && <LinkButton className="sell-tickets-btn" url="/sellers/login" text="SELL TICKETS"/>}
        </header>
    )
}
