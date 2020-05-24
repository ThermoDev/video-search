import React from 'react';
import PlayerHelper from './PlayerHelper';

const VideoPlayer = (props) => {
    const embedUrl = 'https://www.youtube.com/embed/';
    if (props.hasError) {
        const content = <div className="ui">{props.errorMessage}</div>;
        return <PlayerHelper content={content} />;
    }

    if (props.videoId <= 0) {
        const content = <div className="ui text loader">Awaiting Input...</div>;
        return <PlayerHelper content={content} />;
    }

    return (
        <div className="ui stackable doubling two column">
            <div className="column grid">
                <iframe
                    src={embedUrl + props.videoId}
                    title={props.videoTitle}
                    frameBorder="0"
                    allowFullScreen
                    className="video column"
                    style={{ width: '100%' }}
                />
            </div>

            <div className="ui segment column">
                <h3>{props.videoTitle}</h3>
                <p>{props.videoDescription}</p>
            </div>
        </div>
    );

    // return <div className="column">{videos[0]}</div>;
};

export default VideoPlayer;
