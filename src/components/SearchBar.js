import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    onClicky = (event) => {
        event.preventDefault();

        this.props.onClick(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} onClick={this.onClicky} className="ui form">
                    <div className="ui field">
                        <label>Search for a video</label>
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
