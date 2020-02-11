import React from "react"
import {Link} from 'react-router-dom';
import Menu from './Menu'

const Navbar = () => {
    return(
        <nav className=" grey">
            <div classNam="container">
                <Menu/>
            </div>
        </nav>
    )
}

export default Navbar