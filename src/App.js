import React from 'react';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    onSearchSubmit = async (term) => {
        // TODO: use term to make an API request
       console.log(term);
    };

    
    render() {
        return (
            <div className="ui container">
                <SearchBar  onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
