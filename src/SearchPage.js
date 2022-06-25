import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img={require('./assets/search1.png')}
        location="Private room in the center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1/2 shared bathroom · Wifi · Kitchen · Free Parking · Wash Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img={require('./assets/search2.png')}
        location="Private room in the top of Lake Tahoe"
        title="Stay at this romantic view unit"
        description="2 guest · 1 bedroom · 1/2 shared bathroom · Wifi · Kitchen · Free Parking · Wash Machine"
        star={4.85}
        price="$80 / night"
        total="$170 total"
      />
      <SearchResult
        img={require('./assets/search3.png')}
        location="Private room in the center of San Francisco"
        title="Stay at this modern condo"
        description="1 guest · 1 bedroom · 1/2 shared bathroom · Wifi · Kitchen · Free Parking · Wash Machine"
        star={4.9}
        price="$35 / night"
        total="$120 total"
      />
      <SearchResult
        img={require('./assets/search4.png')}
        location="Private room in the center of NewYork"
        title="Stay at this quiet apartment complex"
        description="1 guest · 1 bedroom · 1/2 shared bathroom · Wifi · Kitchen · Free Parking · Wash Machine"
        star={4.9}
        price="$45 / night"
        total="$130 total"
      />
      <SearchResult
        img={require('./assets/search5.png')}
        location="Private room in the central of San Jose"
        title="Stay at this duplex condo"
        description="1 guest · 1 bedroom · 1/2 shared bathroom · Wifi · Kitchen · Free Parking · Wash Machine"
        star={4.85}
        price="$40 / night"
        total="$125 total"
      />
      <SearchResult
        img={require('./assets/search6.png')}
        location="Private room in the center of Tracy"
        title="Stay at this vintage home"
        description="1 guest · 1 bedroom · 1/2 shared bathroom · Wifi · Kitchen · Free Parking · Wash Machine"
        star={4.73}
        price="$30 / night"
        total="$120 total"
      />
      <SearchResult
        img={require('./assets/search7.png')}
        location="Private room in Los Angeles near Disney Land"
        title="Stay at this spacious apartment"
        description="1 guest · 1 bedroom · 1/2 shared bathroom · Wifi · Kitchen · Free Parking · Wash Machine"
        star={4.9}
        price="$45 / night"
        total="$140 total"
      />
    </div>
  )
}

export default SearchPage
