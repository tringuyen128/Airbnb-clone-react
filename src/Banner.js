import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import Search from './Search'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  //use state show date calendar, not show is the current state
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          //button clicked, it show dates (opposite of false = true)
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>

      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => navigate('/search')} variant="outlined">
          Get Away
        </Button>
      </div>
    </div>
  )
}

export default Banner
