import React from 'react';
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';
import axios from 'axios';

const YOUTUBE_API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY.toString()}`; /* Replace with your own API key from the YouTube API. */

class App extends React.Component {
    AppHelper = (props) => {
        return (
            <div className="ui container" style={{ paddingTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div
                    style={{ display: 'flex' }}
                    className="ui two column doubling grid"
                >
                    {props.content}
                    <VideoList
                        videos={this.state.videos}
                        onClick={this.onClick}
                    />
                </div>
            </div>
        );
    };

    state = {
        videoId: '',
        videoTitle: '',
        videoDescription: '',
        videos: [],
        hasError: false,
        errorMessage: '',
    };

    onClick = (id) => {
        // console.log('Video ID: ' + id);
        // console.log('this is: ', this);
        this.setState({ videoId: id });
    };

    onSearchSubmit = async (term) => {
        try {
            const response = await axios.get(
                'https://www.googleapis.com/youtube/v3/search',
                {
                    params: {
                        key: YOUTUBE_API_KEY,
                        q: term,
                        type: 'video',
                        part: 'snippet',
                    },
                }
            );
            console.log(response);
            // console.log('Video ID: ' + this.state.videoId);
            this.setState({
                hasError: false,
                videoId: response.data.items[0].id.videoId,
                videoTitle: response.data.items[0].snippet.title,
                videoDescription: response.data.items[0].snippet.description,
                videos: response.data.items,
            });

        } catch (error) {
            console.log(error);
            this.setState({ hasError: true, errorMessage: error.toString() });
        }
    };

    render() {
        if (this.state.hasError) {
            const videoPlayerContent = (
                <VideoPlayer
                    hasError={this.state.hasError}
                    errorMessage={this.state.errorMessage}
                />
            );
            return <this.AppHelper content={videoPlayerContent} />;
        }

        const videoPlayerContent = (
            <VideoPlayer
                videoId={this.state.videoId}
                videoTitle={this.state.videoTitle}
                videoDescription={this.state.videoDescription}
                className="column"
            />
        );
        return <this.AppHelper content={videoPlayerContent} />;
    }
}

export default App;
