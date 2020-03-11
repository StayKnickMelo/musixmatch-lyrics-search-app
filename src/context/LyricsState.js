import React, { useReducer } from 'react';
import LyricsContext from './lyricsContext';
import lyricsReducer from './lyricsReducer';

import axios from 'axios';

import {
  LOAD_TRACKS,
  SEARCH_TRACKS,
  SWITCH_CHARTS

} from './types'

const LyricsState = (props) => {

  const initialState = {
    track_list: null,
    heading: 'Top 10 Tracks',
    country: 'fr'

  }

  const [state, dispatch] = useReducer(lyricsReducer, initialState);

  const loadTracks = async () => {

    try {
      const res = await axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=${state.country}&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`);


      dispatch({
        type: LOAD_TRACKS,
        payload: res.data.message.body.track_list
      });

    } catch (err) {
      console.log(err);

    }

  }

  const searchTrack = async (track) => {

    try {
      const res = await axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${track}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`);

      dispatch({
        type: SEARCH_TRACKS,
        payload: res.data.message.body.track_list
      })

    } catch (err) {
      console.log(err);

    }
  }

  const switchCharts = (country)=> {

    dispatch({
      type: SWITCH_CHARTS,
      payload: country 
    });

  }




  return (
    <LyricsContext.Provider
      value={{
        track_list: state.track_list,
        heading: state.heading,
        country: state.country,
        loadTracks,
        searchTrack,
        switchCharts
      }}>
      {props.children}
    </LyricsContext.Provider>
  )



}


export default LyricsState;