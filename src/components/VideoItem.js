import React from 'react';

class VideoItem extends React.Component {
    // Renders a single video item
    render() {
        const { thumbnails, description, title } = this.props.video.snippet;
        let videoItemButtonClassName = "video-item-button";

        if (this.props.selectedVideo != null)
            if (this.props.selectedVideo.id.videoId === this.props.video.id.videoId)
                videoItemButtonClassName += " selected"

        return (
            <div
                className="item"
                onMouseUp={() => this.props.onVideoSelect(this.props.video)}
                style={{ padding: '5px' }}
            >
                <div className={videoItemButtonClassName}>
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
