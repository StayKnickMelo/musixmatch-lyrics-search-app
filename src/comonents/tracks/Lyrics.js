import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import axios from 'axios';

const Lyrics = (props) => {


  const [track, setTrack] = useState(null);
  const [lyrics, setLyrics] = useState(null);

  useEffect(() => {
    axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setLyrics(res.data.message.body.lyrics)
        
      })
      .catch(err => console.log(err));

    axios.get(`https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setTrack(res.data.message.body.track)
        
      })
      .catch(err => console.log(err));
      //eslint-disable-next-line
  }, []);




  return (
    lyrics === null || track === null ? (<Spinner />) :
      (<div className='container'>
        <Link to='/' className='mb-2 btn btn-secondary btn-lg'> <i className="fas fa-arrow-circle-left"></i>  Back</Link >
        <div className="card bg-light">
          <h5 className='card-header'>
            <strong>{track.track_name}</strong> By <span className='text-secondary'>{track.artist_name}</span>
          </h5>
          <div className="card-body">

            <p className='card-text '> <strong>Lyrics:</strong> <span className='shadow'>{lyrics.lyrics_body}</span> </p>
          </div>
        </div>

        <ul className='list-group mt-3'>
          <li className="list-group-item my-1">
            <strong>Album Name:</strong> <span className='badge badge-warning' style={{ fontSize: '1rem' }}>{track.album_name}</span>
          </li>
          <li className="list-group-item my-1">
            <strong>Artist Name:</strong> <span className='badge badge-success' style={{ fontSize: '1rem' }}>{track.artist_name}</span>
          </li>
          <li className="list-group-item my-1">
            <strong>Rating:</strong> <span className='badge badge-danger' style={{ fontSize: '1rem' }}>{track.track_rating}</span>
          </li>
          <li className="list-group-item my-1">
            <strong>Explicit:</strong> {lyrics.explicit === 1 ? <i className="fas fa-check-square text-success" ></i> : <i className="fas fa-times-circle text-danger"></i>}
          </li>
        </ul>
      </div>)
  )
}

export default Lyrics
