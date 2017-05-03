import React from 'react';
import { Video, CloudinaryContext  } from 'cloudinary-react'
import { cloudinaryConfig } from '../../database/database'

const placeHolder = "Drawings/DCI-100-A"
const publicID = "Drawings/DCI-100-AB"
const cloudName = cloudinaryConfig.cloud_name

const DrawingSnap = () => (
  <div className="card text-center btn-outline-primary focus" id="drawing-video">
    <h5 className="card-header">Discipline Interface Charts</h5>
    <div className="card-block">
      <CloudinaryContext cloudName={cloudName}>
        <Video publicId={publicID} poster={{ publicId: placeHolder }} crop="scale" controls autoPlay loop />      
      </CloudinaryContext>    
    </div>
  </div>

);

export default DrawingSnap;