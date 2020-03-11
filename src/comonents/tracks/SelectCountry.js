import React, { useState, useContext, Fragment } from 'react';
import LyricsContext from '../../context/lyricsContext';


const SelectCountry = () => {

  const lyricsContext = useContext(LyricsContext);

  const {country, switchCharts} = lyricsContext;


  const [query, setQuery] = useState(country)

  const onChange = (e) => {

    setQuery(e.target.value);

    switchCharts(e.target.value)

  }


  return (
    <Fragment>
      <h3 className='text-center text-white'>Browse By Country</h3>

    <select onChange={onChange} value={query} className="custom-select mb-4">
      <option value="us" >USA</option>
      <option value="uk">UK</option>
      <option value="ru">Russia</option>
      <option value="it">Italy</option>
      <option value="ca">Canada</option>
      <option value="fr">France</option>
    </select>
    </Fragment>
    
    
  )
}

export default SelectCountry
