import React, { Component } from 'react';
import { Card, CardImg, CardHeader, CardBlock } from 'reactstrap';
import { storage } from '../database/database';
import { getSelect } from '../util/getSelect';

const selected = getSelect(10).toString();
const storageRef = storage.ref();
const filePath = "Images/" + selected + ".jpg";

class PhotoSnap extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      url: ""
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
          url: url
        })
      }
    }
    ).catch((error) => (
      console.log(error)
    ))
  }

  render() {

    return (
      <Card block>
        <CardHeader className="text-center">Photo A Day</CardHeader>
        <CardBlock>
          <CardImg src={this.state.url} alt="Photo a day" width="100%" />
        </CardBlock>
      </Card>
    )
  }
}

export default PhotoSnap;