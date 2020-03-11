import React, { useContext, useState } from 'react';
import LyricsContext from '../../context/lyricsContext';

const Search = () => {

  const [trackTitle, setTrackTitle] = useState('');

  const lyricsContext = useContext(LyricsContext);

  const { searchTrack } = lyricsContext;

  const onChange = (e) => {

    setTrackTitle(e.target.value);

  }
  const onSubmit = (e) => {
    e.preventDefault();

    if(trackTitle === ''){
      return 
    }

    searchTrack(trackTitle);

    setTrackTitle('')

  }

  return (
    <form className='mb-4' onSubmit={onSubmit}>
      <h2 className='text-center text-light my-3'> <i className="fab fa-itunes-note text-danger"></i> Search any song you like</h2>
      <div className="form-group">
        <input className='form-control' type="text" placeholder='Search a song...' value={trackTitle} onChange={onChange} name='trackTitle' />
      </div>
      <input type="submit" value="Search" className='btn btn-block btn-danger' />
    </form>
  )
}

export default Search
