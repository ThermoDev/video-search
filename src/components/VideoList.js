import './VideoList.css';
import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    // Renders the list of videos, using VideoItem as a child component for each video.
    render() {
        const Titles = this.props.videos.map((video) => {
            return (
                <VideoItem
                    key={video.id.videoId}
                    video={video}
                    selectedVideo={this.props.selectedVideo}
                    onVideoSelect={this.props.onVideoSelect}
                    style={{ padding: '5px' }}
                />
            );
        });
        return (
            <div className="ui middle aligned divided list column">
                {Titles}
            </div>
        );
    }
}

export default VideoList;
