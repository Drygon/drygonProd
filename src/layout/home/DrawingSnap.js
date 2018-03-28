import React, { Component } from 'react';
import YouTube from 'react-youtube';

const videoId = "QwkfRzWtjJE"

class DrawingSnap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: videoId,
      player:null,
    };
    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

   onReady(event) {    
    this.setState({
      player: event.target,
    });
  }
onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }
 
 onEnd() {
   this.state.player.playVideo();
  }
  render() {

    const opts = {
     height: "360",
     width: "640",   
     suggestedRate:0.25,  
    playerVars: {
        autoplay: 1
      },
    frameborder:"0"
    }

    return (
 <div className="card text-center focus" id="drawing-video">
    <h5 className="card-header">Discipline Interface Charts</h5>
    <div className="card-block">     
       <YouTube
        videoId={this.state.videoId} 
        opts={opts}
        onReady={this.onReady} 
        onEnd={this.onEnd}
        id="dci100ab"/>       
    </div>
  </div>
    )
  }

} 

export default DrawingSnap;