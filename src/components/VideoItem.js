import React from 'react';

class VideoItem extends React.Component {
    // Renders a single video item
    render() {
        const { thumbnails, description, title } = this.props.video.snippet;
        return (
            <li
                onMouseUp={() => this.props.onVideoSelect(this.props.video)}
                style={{ padding: '5px' }}
            >
                <button>
                    <img src={thumbnails.default.url} alt={description} />
                    {title}
                </button>
            </li>
        );
    }
}

export default VideoItem;
