import React from "react";
import './navbar.scss'
import logo from "../../assets/logo.png"
import discord from "../../assets/discord.png"
import twitter from "../../assets/twitter.png"

function Navbar() {
    return (
        <nav className="navbar">
            <img className="site-logo" src={logo} alt="time logo" />
            <ul>
                <li><a>About us</a></li>
                <li><a><img className="discord" alt="discord logo" src={discord}/></a></li>
                <li><a><img className="twitter" alt="twitter logo" src={twitter}/></a></li>
            </ul>
        </nav>
    )
}

export default Navbar
