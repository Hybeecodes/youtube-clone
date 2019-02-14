import React from 'react';

const VideoItem = ({video, handleVideoSelect}) => {
  console.log(video)
    return (
        <div className="card horizontal" onClick={handleVideoSelect}>
          <div className="card-image">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} width={video.snippet.thumbnails.medium.width} height={video.snippet.thumbnails.medium.height}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>
                <b>
                  {video.snippet.title}
                </b>
              </p>
              <span className="desc">
              {video.snippet.description}
              </span>
            </div>
          </div>
        </div>
                
    )
}

export default VideoItem;