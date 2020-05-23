import React from 'react';
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';
import axios from 'axios';

const YOUTUBE_API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY.toString()}`; /* Replace with your own API key from the YouTube API. */

// TODO: Create separate Video in state for only using one video
// TODO: Communicate VideoList to Parent to update Video upon click

class App extends React.Component {
    state = { videos: [] };

    onSearchSubmit = async (term) => {
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
        // console.log(response);
        this.setState({ videos: response.data.items });
    };

    onClickyHandle = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{ paddingTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} onClick={this.onClickyHandle}/>
                <div style={{display:'flex'}} className="ui two column doubling grid">
                    <VideoPlayer videos={this.state.videos} className="column"/>
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

export default App;
