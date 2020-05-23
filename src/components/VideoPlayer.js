import React from 'react';

const VideoPlayer = (props) => {
    const embedUrl = 'https://www.youtube.com/embed/';

    const videos = props.videos.map((video) => {
        return (
            <div className="ui stackable doubling two column">
                <div className="column grid">
                    <iframe
                        src={embedUrl + video.id.videoId}
                        title={video.snippet.title}
                        frameBorder="0"
                        allowFullScreen
                        className="video column"
                    />
                </div>

                <div className="ui segment column">
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    });
    return <div className="column">{videos[0]}</div>;
};

export default VideoPlayer;
