import React from 'react'
import {Link} from 'react-router-dom';

export default function Logo() {
    return <Link  to="/"><img title="GO TO HOMEPAGE" src="/logo.png" alt="Extick logo" width="140" height="35"/></Link>
}
