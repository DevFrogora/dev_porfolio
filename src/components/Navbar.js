import React, { Component } from 'react'
import navStyle from './navStyle.module.css'
import { NavLink, Link } from 'react-router-dom'

class Navbar extends Component {

    render() {
        const linkStyle = {
            color: 'white',
            padding: '0 16px',
            textDecoration: 'none',
            borderRadius: '70px'
        }
        const activeStyle = {
            fontWeight: "bold",
            color: "red",
            backgroundColor: "white"
        }
        let classname = navStyle.links + " content" //
        return (
            <div>
                <nav>
                    <Link to="/dev_porfolio" style={linkStyle}>
                        <div className={navStyle.logo}><h1> Frogora Dev </h1></div>
                    </Link>
                    <ul className={classname}>
                        <li className={navStyle.forMobile} >
                        <div className={navStyle.dropdown}>
                            <div className={navStyle.dropbtn}>Menu
                            </div>
                            <div className={navStyle.dropdown_content}>
                            <NavLink  to="/about"> <span> 1. About </span>    </NavLink>
                            <NavLink  to="/experience"> <span> 2. Experience </span>    </NavLink>
                            <NavLink  to="/projects"> <span> 3. Work  </span>   </NavLink>
                            <NavLink  to="/contact"> <span> 4. Contact </span>    </NavLink>
                            </div>
                            </div>
                            </li>
                        <NavLink exact activeStyle={activeStyle} style={linkStyle} to="/about">
                            <li className={navStyle.navItem}><span >1. About</span></li>
                        </NavLink>
                        <NavLink exact activeStyle={activeStyle} style={linkStyle} to="/experience">
                            <li className={navStyle.navItem}><span >2. Experience</span></li>
                        </NavLink>
                        <NavLink exact activeStyle={activeStyle} style={linkStyle} to="/projects">
                            <li className={navStyle.navItem} ><span >3. Projects</span></li>
                        </NavLink>
                        <NavLink exact activeStyle={activeStyle} style={linkStyle} to="/contact">
                            <li className={navStyle.navItem} ><span >4. Contact</span></li>
                        </NavLink>
                        <li className={navStyle.navItem}><span className={navStyle.navItem}>Resume</span></li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
