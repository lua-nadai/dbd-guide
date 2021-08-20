import { Component } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";


class CharacterList extends Component {

    render () {
        return (
            <div className='character-list'>
                {this.props.characters.map(character => <Link to={`${this.props.characterType}/${character._id}`} key = {character._id} > <CharacterCard {...character} /> </Link> )}
            </div>
        )
    }
}

export default CharacterList