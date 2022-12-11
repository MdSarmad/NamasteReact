import React, {useState} from 'react'
import './Header.css';
import logoSource from '../../asset/groupLogo.png';
import logoIcon from '../../asset/user-icon.png';

const Header = ({setFilterText}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterText(text);
  }
 
  return (
    <div className='app-header'>
        <div className="app-logo">
        <img src={logoSource} alt="group-logo" />
        </div>
        <div className="app-search-bar">
          <form onSubmit={handleSubmit}>
            <input type="text" name="insurgents" id="insurgents" placeholder='Insurgents' onChange={(e) => setText(e.target.value)}/>
            <span className='app-search-btn'>Search</span>
          </form>
        </div>
        <div className="app-user-icon">
        <img src={logoIcon} alt="group-icon" />
        </div>
    </div>
  )
}

export default Header