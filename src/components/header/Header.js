import React from 'react'
import './Header.css';
// import groupLogo from "../../asset/groupLogo";

const Header = () => {
    let logoSource = require(`../../asset/groupLogo.png`);
    let logoIcon = require(`../../asset/user-icon.png`);
  return (
    <div className='app-header'>
        <div className="app-logo">
        <img src={logoSource} alt="group-logo" />
        </div>
        <div className="app-search-bar">
            <input type="text" name="insurgents" id="insurgents" placeholder='Insurgents'/>
            <span className='app-search-btn'>Search</span>
        </div>
        <div className="app-user-icon">
        <img src={logoIcon} alt="group-icon" />
        </div>
    </div>
  )
}

export default Header