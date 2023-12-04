import React from 'react'
import Filter from '../filterdata/Filter'
import Countryfetch from '../CountryData/CountryPost/Countryfetch'
import { useState } from 'react'
import './main.css'
const Mainpage = () => {
    const [search, setsearch] = useState('')
    const inputvalue = (data) => {
setsearch(data)
    }
  return (
    <div className='contain'>
        <div className='section'>
            <Filter searchinput={inputvalue}/>
            <Countryfetch searchinput={search}/>
        </div>

    </div>
  )
}

export default Mainpage