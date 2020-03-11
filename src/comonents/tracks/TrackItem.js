import React from 'react';
import {Link} from 'react-router-dom';

const TrackItem = ({track}) => {
  return (
    <div className='col-md-6'>
      <div className="card bg-light mb-4 shadow-sm">
        <div className="card-body">
          <h5 style={{ fontSize: '1.2rem' }} className='text-center '>{track.artist_name}</h5>
          <p className="card-text">
            <strong className='badge badge-success'> <i className="fas fa-play"></i> Track</strong> {track.track_name}
            <br />
            <strong className='badge badge-danger'> <i className="fas fa-compact-disc"></i> Album</strong> {track.album_name}
          </p>
          <Link className='btn btn-primary btn-block' to={`lyrics/track/${track.track_id}`}>
            View Lyrics <i className="fas fa-arrow-circle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TrackItem
