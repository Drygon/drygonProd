import React,{ Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import logo from '../images/logo_origin_25.png';

    const location = {
      "lat": 51.0486151,
      "lng": -114.0708459,
    }

   
    const markers = [
       {
         position: {
            "lat": 51.12,
            "lng": -114.0708459,
     },
     icon: logo       
    }
  ]

const mapStyle = {   
    height: "400px",
    width: "100%"
  }
  
const MyMap = withGoogleMap(props => (
  <GoogleMap   
    ref={props.onMapLoad}
    defaultZoom={8}
    defaultCenter={location}
    onClick={props.onMapClick}  
  >
   {props.markers.map((marker, index) => (
      <Marker key={index}
        {...marker}       
      />
    ))}
      </GoogleMap>
));

export default class MapContainer extends Component {
 
  render() {
   return (
      <MyMap style={mapStyle}    
    containerElement={
      <div style={{ height:"100%", width:"100%"}} />
    }
    mapElement={
      <div style={{height:"100%",width:"100%"}} />
    }   
    markers={markers}   
  />
      );
   
  }
}