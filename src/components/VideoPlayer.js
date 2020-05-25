import React from 'react';
import './VideoPlayer.css';
import PlayerHelper from './PlayerHelper';
const embedUrl = 'https://www.youtube.com/embed/';

const VideoPlayer = (props) => {
    // Initial Error Handling
    if (props.hasError) {
        const content = (
            <div className="ui">
                {' '}
                <p style={{ fontSize: 'large', fontWeight: '700' }}>
                    Error: {props.error.code}{' '}
                </p>
                <p style={{ fontSize: 'medium' }}>{props.error.message}</p>
            </div>
        );
        return <PlayerHelper content={content} />;
    }
    if (props.video <= 0) {
        const content = (
            <div
                className="ui text loader"
                style={{ fontSize: 'large', fontWeight: '700' }}
            >
                Awaiting Input...
            </div>
        );
        return <PlayerHelper content={content} />;
    }

    // Render the video player if no errors encountered
    const { title, description } = props.video.snippet;
    return (
        <div className="ui stackable doubling two column">
            <div className="column grid video-container">
                <iframe
                    src={embedUrl + props.video.id.videoId}
                    title={title}
                    frameBorder="0"
                    allowFullScreen
                    className="video column"
                />
            </div>

            <div className="ui segment column">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;
