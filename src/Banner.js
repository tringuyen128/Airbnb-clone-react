import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material'

const Banner = () => {
  //use state show date calendar, not show is the current state
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <h1>SHOW DATE PICKER</h1>}
        <Button
          //button clicked, it show dates (opposite of false = true)
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          Search Dates
        </Button>
      </div>
      s
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
