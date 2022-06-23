import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__icon"
        src={require('./assets/airbnblogo.png')}
        alt=""
      />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <KeyboardArrowDownIcon />
        <AccountCircleIcon />
      </div>
    </div>
  )
}

export default Header
