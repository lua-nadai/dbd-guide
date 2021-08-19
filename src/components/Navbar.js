import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/'><img scr='https://yt3.ggpht.com/HXnVMt6rlRpBOdoekisviU5Ug0owXR-_EGhnBilQzUtPcz-4eXooMc8GBrapawiuTSBfmuGO8Kg=s900-c-k-c0x00ffffff-no-rj' alt='DBD logo' /></Link>
            <Link to='/survivors'>Survivors</Link>
            <Link to='/killers'>Killers</Link>
            <Link to='/perks'>Perks</Link>
        </nav>
    )
}

export default Navbar

