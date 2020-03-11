import React, { Fragment } from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';
import SelectCountry from '../tracks/SelectCountry';

const Home = () => {
  return (
    <Fragment>
      <Search/>
      <SelectCountry/>
      <Tracks/>
    </Fragment>
  )
}

export default Home
