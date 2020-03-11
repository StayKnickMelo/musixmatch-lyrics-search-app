import React, { useContext, useEffect, Fragment } from 'react';
import LyricsContext from '../../context/lyricsContext';
import Spinner from '../layout/Spinner';
import TrackItem from './TrackItem';

const Tracks = () => {

  const lyricsContext = useContext(LyricsContext);

  const { track_list, heading, loadTracks, country } = lyricsContext;

  const charts = [{query: 'us', title:'USA'}, {query: 'uk', title: 'UK'}, {query: 'ru', title: 'Russia'}];

  const getCharts = (country)=>{
    switch(country){
      case 'us':
        return `Top 10 Tracks of the USA charts`
      case 'ca':
        return `Top 10 Tracks of the Canada charts`
      case 'uk':
        return 'Top 10 Tracks of the UK charts'
      case 'ru':
        return 'Top 10 Tracks of Russia charts'
      case 'it':
        return 'Top 10 Tracks of Italy charts'
      case 'fr':
        return 'Top 10 Tracks of France charts'
      default: 
        return 'Top 10 Tracks'
    }

  }
  

  useEffect(() => {
    loadTracks()
    //eslint-disable-next-line
  }, [country]);

  return (
    track_list === null ? (<Spinner />) :
      (<Fragment>
        <h3 className='text-center mb-4 text-white'>{getCharts(country)}</h3>
        <div className="row">
          {track_list.map(track => (<TrackItem key={track.track.track_id} track={track.track} />))}
        </div>
      </Fragment>)

  )
}

export default Tracks
