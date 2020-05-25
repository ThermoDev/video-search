import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    // Update the term in state on form submit
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    // Renders the Search Bar
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label style={{ fontSize: 'medium' }}>
                            Search for a video
                        </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                            placeholder="Search..."
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
