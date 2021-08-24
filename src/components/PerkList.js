import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {PerkCard} from './PerkCard.js';
import Search from './Search.js';

class PerkList extends Component {
    render() {
        return(
            <>
                <div className='center'>
                    <h1>Perks</h1>
                    <Search characterFilter={this.props.characterFilter}/>
                </div>
                <div className='character-list'>
                    {this.props.perks.map( perk => 
                        <Link to={`/perks/${perk._id}`}> 
                            <PerkCard {...perk}/> 
                        </Link>
                    )}
                </div>
            </>
        )
    }
}

export default PerkList