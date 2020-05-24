import React from 'react';

class VideoItem extends React.Component {
    render() {
        const { thumbnails, description, title } = this.props.video.snippet;
        return (
            <li onClick={() => this.props.onClick(this.props.video.id.videoId)}>
                <img src={thumbnails.default.url} alt={description} />
                {title}
            </li>
        );
    }
}

export default VideoItem;
