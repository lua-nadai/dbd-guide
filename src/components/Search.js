import React, { Component } from 'react';

class Search extends Component {
    state = {
        input: ''
    }

    handleSearch = (event) => {
        this.setState({
            input: event.target.value
        })
        this.props.characterFilter(this.state.input)
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='Search...'
                    onChange={this.handleSearch}
                    value={this.state.input}
                />
            </div>
        )
    }
    

}

export default Search
