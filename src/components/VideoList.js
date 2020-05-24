import './VideoList.css';
import React from 'react';
import VideoItem from './VideoItem';

class VideoPlayer extends React.Component {
    state = { videoId: '' };

    render() {
        const Titles = this.props.videos.map((video) => {
            return (
                <VideoItem
                    key={video.id.videoId}
                    video={video}
                    onClick={() => this.props.onClick(video.id.videoId)}
                />
            );
        });
        // console.log(Titles);
        return <ul className="column">{Titles}</ul>;
    }
}

export default VideoPlayer;
