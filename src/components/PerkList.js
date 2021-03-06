import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {PerkCard} from './PerkCard.js';
import Search from './Search.js';

class PerkList extends Component {
    render() {
        return(
            <div className='page'>
                <span className='img-left'/>
                <div className='home-page'>
                    <div className='character-header center'>
                        <h1 style={{ fontSize: '2.5vw' }}>Perks</h1>
                        <Search characterFilter={this.props.characterFilter}/>
                    </div>
                    <hr/>
                    <div className='perk-list'>
                        {this.props.perks.map( perk => 
                            <Link to={`/perks/${perk._id}`}> 
                                <PerkCard {...perk}/> 
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default PerkList