import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src='https://logos-world.net/wp-content/uploads/2021/02/Dead-by-Daylight-Symbol.jpg' alt='DBD logo' width='90'/>
            </Link>
            <Link to='/survivors'>Survivors</Link>
            <Link to='/killers'>Killers</Link>
            <Link to='/perks'>Perks</Link>
        </nav>
    )
}

export default Navbar

