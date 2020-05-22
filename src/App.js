import React from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';

const YOUTUBE_API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY.toString()}`; /* Replace with your own API key from the YouTube API. */

class App extends React.Component {
    onSearchSubmit = async (term) => {
        const response = await axios.get(
            'https://www.googleapis.com/youtube/v3/search',
            {
                params: {
                    key: YOUTUBE_API_KEY,
                    q: term,
                },
            }
        );

        console.log(response);
    };

    render() {
        return (
            <div className="ui container" style={{ paddingTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
