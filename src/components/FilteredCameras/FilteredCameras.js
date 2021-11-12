import React from 'react';
import Camera from '../Camera/Camera';

const FilteredCameras = (props) => (
  <div>
    {props.work.map(currentCamera => (
      <Camera key={currentCamera.id} work={currentCamera} />
    ))}
  </div>
);

export default FilteredCameras;
