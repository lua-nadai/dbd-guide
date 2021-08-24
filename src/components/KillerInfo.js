import React, { Component } from 'react';

import ApiDbd from '../api/api.js';

class KillerInfo extends Component {
    state = {
        character: {}
    }

    componentDidMount = async () => {
        const result = await ApiDbd.oneKiller(this.props.match.params._id)

        this.setState({
            character: result.data
        })
    }

    render() {
        return(
            <>
                {this.state.character._id?
                <>
                        {/* <img src={`${this.state.character.icon.shop_background}`}/> */}
                        <div className='header-router'>
                            <h1>{this.state.character.name}</h1>
                            <h2>{this.state.character.alias}</h2>
                        </div>
                        
                        <div className='header-router'>
                            {<img src={`${this.state.character.icon.portrait}`} alt={`${this.state.character.name} portrait`} width='150' />}

                            <div className='character-box'>
                                <h3>{this.state.character.full_name}</h3>
                                <p>Gender: {this.state.character.gender}</p>
                                <p>Map: {this.state.character.realm?this.state.character.realm:`No exclusive map`}</p>
                                <p>Nationality: {this.state.character.nationality}</p>
                                <p>DLC: {this.state.character.dlc}</p>
                            </div>
                        </div>

                        <div className='header-router'>
                            <div className='character-perk' >
                                {this.state.character.perks.map((perk, index) => <h1 index>{perk}</h1>)}
                            </div>

                            <div className='character-story'>
                                <h2>Story:</h2>
                                <p>{this.state.character.lore}</p>
                            </div>
                        </div>
                </>:<h1>Loading...</h1>}
            </>
        )
    }

}

export default KillerInfo