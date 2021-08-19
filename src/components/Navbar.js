import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'><img src='../../public/images/dbd-logo.png' alt='DBD logo' /></Link>
            <Link to='/survivors'>Survivors</Link>
            <Link to='/killers'>Killers</Link>
            <Link to='/perks'>Perks</Link>
        </nav>
    )
}

export default Navbar

