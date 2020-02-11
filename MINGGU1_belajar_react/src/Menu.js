import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return(
        <ul className="left">
            <li><NavLink to='/'>PBF Minggu 1</NavLink></li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>Features</NavLink></li>
            <li><NavLink to='/'>Pricing</NavLink></li>
        </ul>
    )
}

export default Menu
