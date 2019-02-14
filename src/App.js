import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Searchbar from './Searchbar';
import youtube from './apis/youtube';
import ReactPlayer from 'react-player';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import CurrentVideo from './CurrentVideo';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSelectedVideo = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  defaultVideo = "https://www.youtube.com/watch?v=aCMbSyngXB4";

  handleSubmit = async(query) => {
    const response = await youtube.get('/search',{
      params:{
        q: query
      }
    });
    console.log(response)
    this.setState({
      videos: response.data.items
    })
  };

  componentDidMount(){
    this.setState({
      selectedVideo: this.defaultVideo
    })
  }

  render() {
    return (
      <div className="App row container">
      <br />
        <Searchbar handleFormSubmit= {this.handleSubmit} />
        <div className="col s8">
        <CurrentVideo video={this.state.selectedVideo} />
        </div>
        <div className="col s4">
          <VideoList videos={this.state.videos} />
          {/* <VideoItem /> */}
        </div>
      </div>
    );
  }
}

export default App;
