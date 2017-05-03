import React, { Component } from 'react'
import { storage } from '../../database/database';

const storageRef = storage.ref()
const drawingFile = storageRef.child('Drawings/DCI-100-A-Full.pdf')

class ChartFull extends Component {
  constructor() {
    super()
    this.state = ({
      url: ""
    })
  }

  componentWillMount() {
    drawingFile.getDownloadURL().then((url) => {
      if (url !== '') {
        this.setState({
          url: url
        });

      }
    }
    ).catch((error) => (
      console.log(error)
    ))
  }

  componentWillUnmount() {
    storage.ref('Drawings').off()
  }

  render() {
   
    return (
      <div id="chart">
        <div className="chart-wrapper">
          <iframe src={this.state.url} allowFullScreen>
            <p><em><strong>ERROR: </strong>
              An &#105;frame should be displayed here but your browser version does not support &#105;frames.</em> Please update your browser to its most recent version and try again.</p>
          </iframe>
        </div>
      </div>
    )
  }
}

export default ChartFull;