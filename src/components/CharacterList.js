import React, { Component } from "react";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard.js";
import Search from "./Search.js";


class CharacterList extends Component {

    render () {
        return (
            <>
                <div className='header-router'>
                    <h1>{this.props.characterName}</h1>
                    <Search characterFilter={this.props.characterFilter} />
                </div>
                <div className='character-list'>
                    {this.props.characters.map( character => 
                        <Link to={`${this.props.characterType}/${character._id}`} key = {character._id} > 
                            <CharacterCard {...character} /> 
                        </Link> 
                    )}
                </div>
            </>
        )
    }
}

export default CharacterList