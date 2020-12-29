import React from 'react';
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';
import axios from 'axios';

const YOUTUBE_API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY.toString()}`; /* Replace with your own API key from the YouTube API. */

class App extends React.Component {
    state = {
        videos: [],
        video: [],
        hasError: false,
        error: [],
    };

    // Used to update the video that has been selected
    onVideoSelect = (video) => {
        this.setState({
            video: video,
            hasError: false,
        });
    };

    // On Search Submit used by Search Bar to propagate the VideoList
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

            if (response.data.pageInfo.totalResults === 0) {
                const error = {
                    code: '204',
                    message: 'No results found for: ' + term,
                };
                this.setState({
                    hasError: true,
                    error: error,
                });
            } else {
                console.log(response.data);
                this.setState({
                    video: response.data.items[0],
                    videos: response.data.items,
                    hasError: false,
                });
            }
        } catch (error) {
            this.setState({
                hasError: true,
                error: error.response.data.error,
            });
        }
    };

    // Renders the App
    render() {
        return (
            <div className="ui container" style={{ paddingTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div
                    style={{ display: 'flex' }}
                    className="ui two column doubling grid"
                >
                    <VideoPlayer
                        hasError={this.state.hasError}
                        error={this.state.error}
                        video={this.state.video}
                        className="column"
                    />
                    <VideoList
                        selectedVideo={this.state.video}
                        videos={this.state.videos}
                        onVideoSelect={this.onVideoSelect}
                    />
                </div>
            </div>
        );
    }
}

export default App;
