import React from 'react'
import {Link} from 'react-router-dom';
import logoSvg from '../../src/pics/extickLogo.svg';

export default function Logo() {
    return <Link  to="/"><img title="GO TO HOMEPAGE"  src={logoSvg} alt="Extick logo" width="140" height="52"/></Link>
}
