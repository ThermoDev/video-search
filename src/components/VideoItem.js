import React from 'react';

class VideoItem extends React.Component {
    // Renders a single video item
    render() {
        const { thumbnails, description, title } = this.props.video.snippet;
        return (
            <div
                className="item"
                onMouseUp={() => this.props.onVideoSelect(this.props.video)}
                style={{ padding: '5px' }}
            >
                <div className="video-item-button">
                    <img
                        className="ui small image"
                        src={thumbnails.medium.url}
                        alt={description}
                    />
                    <div
                        className="content header"
                        style={{ paddingLeft: '5px' }}
                    >
                        {title}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;
