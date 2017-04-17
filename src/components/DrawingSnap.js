import React from 'react';
import { Card, CardHeader, CardBlock } from 'reactstrap';
import { Video, CloudinaryContext  } from 'cloudinary-react'
import { cloudinaryConfig } from '../database/database'

const placeHolder = "Drawings/DCI-100-A"
const publicID = "Drawings/DCI-100-AB"
const cloudName = cloudinaryConfig.cloud_name

const DrawingSnap = () => (
  <Card block>
    <CardHeader className="text-center">Discipline Interface Charts</CardHeader>
    <CardBlock>
      <CloudinaryContext cloudName={cloudName}>
        <Video id="drawing-video" publicId={publicID} poster={{ publicId: placeHolder }}
          width="700" height="500" crop="scale" controls autoPlay loop />      
      </CloudinaryContext>
    </CardBlock>
  </Card>
);

export default DrawingSnap;