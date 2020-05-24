import './VideoList.css';
import React from 'react';
import VideoItem from './VideoItem';

class VideoPlayer extends React.Component {
    render() {
        const Titles = this.props.videos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video} />;
        });
        // console.log(Titles);
        return <ul className="column">{Titles.slice(1, 5)}</ul>;
    }
}

export default VideoPlayer;
