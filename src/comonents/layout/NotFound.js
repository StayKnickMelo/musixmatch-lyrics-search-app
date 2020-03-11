import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center'>
      <h2 className=' text-white'>The Page You're Looking For Doesn't Exist</h2>
      <Link to='/' className='btn btn-danger'><i className="fas fa-backward"></i> Back To Main Page</Link>
      
    </div>
  )
}

export default NotFound
