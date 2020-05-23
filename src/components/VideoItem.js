import React from 'react';

class VideoItem extends React.Component {
   


    render() {
        // console.log(this.props.video);
        const { thumbnails, description, title } = this.props.video.snippet;
        return (
            <li>
                <img src={thumbnails.default.url} alt={description} />
                {title}
            </li>
        );
    }
}

export default VideoItem;
