import React from 'react';

const VideoPlayer = (props) => {
    const embedUrl = 'https://www.youtube.com/embed/';

    const videos = props.videos.map((video) => {
        return <iframe src={embedUrl + video.id.videoId} title="video" />;
    });
    return <div>{videos[0]}</div>;
};

export default VideoPlayer;
