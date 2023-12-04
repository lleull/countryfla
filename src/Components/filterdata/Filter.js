import React from 'react'
import { useState } from 'react'
import './Filter.css'
import arrow from '../Navbara/icons8-chevron-24.png'
import { Link } from 'react-router-dom'
import search from './icons8-search-50.png'
import countrydata from '../../data'
const Filter = (props) => {
    const [getinput, setgetinput] = useState('')
    const [toogleregion, settoogleregion] = useState()
    const handletoogle =() => settoogleregion(!toogleregion)
        props.searchinput(getinput)
  return (
    <div className='filterpage'>
         <div style={{display: 'flex', justifyContent:'center',borderRadius:'10px', alignItems:'center', background:'rgb(32, 29, 24)'}}>
         <img style={{width: '20px', height:'20px'}} src={search} alt='ad' />
            <input placeholder='Search' type='text' required onChange={(e) => setgetinput(e.target.value) } />
           </div>
           <div onClick={handletoogle} className='region'>
                <button className='filterbutton'>Filter by region <img className='arrow' src={arrow} alt='arr'/> </button>
                <div className='datafilter'>
                {toogleregion? countrydata.map((data) => <div className='filtername'> 
             <Link to= {`/country/${data.numericCode}`}>
           
             
             <p className='filterbyname'>{data.name}</p> 
             </Link>
                 
                    
                
                </div>) : <></>}


                </div>
               
           </div>
        </div>
  )
}

export default Filter