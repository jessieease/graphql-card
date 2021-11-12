import React from 'react';
import './Camera.css';

const Camera = (props) => (
  <div className='camera-container'>
    <div key={props.work.id}>
      <img
        alt="camera"
        src={`http://ih1.redbubble.net/work.${props.work.id}.1.flat,135x135,075,f.jpg`}
      />
    <div>MODEL: { props.work.exif.model ? `${props.work.exif.model}` : 'Unknown Model' }</div>
    <div>MAKE: { props.work.exif.make ? `${props.work.exif.make}` : 'Unknown Make' }</div>
  </div>
  </div>
);

export default Camera;