import React, { Component } from 'react'
import { storage } from '../database/database'
import PdfViewer from './PdfViewer';

const storageRef = storage.ref()
const drawingFile = storageRef.child('Drawings/DCI-100-A.pdf')

class DrawingsPage extends Component {
constructor() {
    super()
    this.state=({
      url: ""
    })
  }

componentWillMount() {
  drawingFile.getDownloadURL().then((url) => {
    if (url !== '') {
      this.setState({
        url: url
      })
    }
  }
  ).catch((error)=> (
    console.log(error)
  ))
}

componentWillUnmount () {
  storage.ref('Drawings').off()
}

  render() {
      return (
      <div id="drawing">
       <PdfViewer file={this.state.url} />
      </div>
    )
  }
}

export default DrawingsPage