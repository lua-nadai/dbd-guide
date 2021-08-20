import { Component } from "react";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard.js";
import Search from "./Search.js";


class CharacterList extends Component {
    state = {
        characterList: this.props.characters,
        filteredCharacter: this.props.characters
    }


    characterFilter = (inputSearch) => {
        const filtered = this.state.characterList.filter((character) => {
            return character.name.toLowerCase().includes(inputSearch.toLowerCase())
        })
        
        this.setState({
            filteredCharacter: filtered
        })

    }


    render () {
        return (
            <>
                {console.log(this.state.filteredCharacter)}
                <h1>{this.props.characterName}</h1>
                <Search characterFilter={this.characterFilter} />
                <div className='character-list'>
                    {this.state.filteredCharacter.map(character => <Link to={`${this.props.characterType}/${character._id}`} key = {character._id} > <CharacterCard {...character} /> </Link> )}
                </div>
            </>
        )
    }
}

export default CharacterList