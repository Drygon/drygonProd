import React, { Component } from 'react';
import { storage } from '../../database/database';
import { getSelect } from '../../util/getSelect';

const selected = getSelect(138).toString();
const storageRef = storage.ref();
const filePath = "Images/" + selected + ".jpg";

class PhotoSnap extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      url: "",
      loading: false,
    })
  }

  componentWillMount() {
    this.setState({
      loading: true
    })

    const imageFile = storageRef.child(filePath)
    imageFile.getDownloadURL().then((url) => {
      if (url !== '') {
        this.setState({
          url,
          loading: false,
        })
      }
    }
    ).catch((error) => {
      console.log(error);
    }
    );
  }

  render() {
     
    return (
      <div className="card text-center focus"  id="dayphoto">
      <h5 className="card-header">Photo A Day</h5>
      <div className="card-block">
      {!this.state.loading && 
        <img src={this.state.url} alt="Personal shot" /> }
      </div>
      </div>    
     
    );  
}
}

export default PhotoSnap;