import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'
//main style file
import 'react-date-range/dist/theme/default.css'
//theme css file
import { DateRangePicker } from 'react-date-range'
import { Button } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'

//DATE PICKER COMPONENT
const Search = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  //must have to use date picker
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  //this function responsible when you select the date
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of guests</h2>
      <PeopleIcon className="people__icon" />
      <input min={0} defaultValue={2} type="number" />
      <Button>Search Airbnb</Button>
    </div>
  )
}

export default Search
