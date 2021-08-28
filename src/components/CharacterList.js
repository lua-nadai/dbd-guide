import React, { Component } from "react";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard.js";
import Search from "./Search.js";


class CharacterList extends Component {

    render () {
        return (
            <div className='page'>
                <span className='img-left'/>
                <div className='home-page'>
                    <div className='character-header center'>
                        <h1 style={{fontSize:'2.5vw'}}>{this.props.characterName}</h1>
                        <Search characterFilter={this.props.characterFilter} />
                    </div>
                    <hr/>
                    <div className='character-list'>
                        {this.props.characters.map( character => 
                            <Link to={`${this.props.characterType}/${character._id}`} key = {character._id} > 
                                <CharacterCard {...character} /> 
                            </Link> 
                        )}
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default CharacterList