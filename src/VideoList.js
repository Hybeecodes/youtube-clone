import React, { Component } from 'react'
import VideoItem from './VideoItem';


export default class VideoList extends Component {

  handleVideoSelect = () => {
    
  }
  render() {
      console.log('videos',this.props)
      const no_vids = <p>No Videos Yet</p>;
      const renderedVideos = (!this.props.videos.length)? no_vids:this.props.videos.map((video) => { let i=0;
        return <VideoItem key={video.id.videoId} video={video} />
      });

      return( 
      <div className="row">
        {renderedVideos}
      </div>
      )
  }
}
