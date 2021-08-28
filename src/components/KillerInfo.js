import React, { Component } from 'react';

import ApiDbd from '../api/api.js';
import { PerkCard } from './PerkCard.js';

class KillerInfo extends Component {
    state = {
        character: {},
        perks: []
    }

    componentDidMount = async () => {
        const killer = await ApiDbd.oneKiller(this.props.match.params._id)
        const perks = await ApiDbd.perks()

        const filteredPerks = perks.data.filter((perk) => { return perk.name === killer.data.name })
        
        this.setState({
            character: killer.data,
            perks: filteredPerks
        })
    }

    render() {
        return(
            <>
                {this.state.character._id?
                    <div className='page'>
                       
                        <img className='img-left' src={`${this.state.character.icon.shop_background}`} alt={this.state.character.name}/> 

                        <div className='home-page'>

                            <div className='character-title center'>
                                <h1>{this.state.character.name}</h1>
                                <h2>{this.state.character.alias}</h2>
                            </div>
                            
                            <section className='section-character'>

                                <div className='center character-info'>
                                    {<img src={`${this.state.character.icon.portrait}`} alt={`${this.state.character.name} portrait`} width='180' />}

                                    <div className='character-box'>
                                        <p>Gender: {this.state.character.gender}</p>
                                        <p>Map: {this.state.character.realm?this.state.character.realm:`No exclusive map`}</p>
                                        <p>Nationality: {this.state.character.nationality}</p>
                                        <p>DLC: {this.state.character.dlc}</p>
                                    </div>
                                </div>

                                <hr/>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    
                                    <div style={{ margin: '0vw 3vw' }}>
                                        <h1>Perks:</h1>
                                    </div>

                                    <div className='character-container-perk'>
                                        {this.state.perks.map((perk, index) => 
                                            <div className='character-perk'>
                                                <PerkCard {...perk} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <section className='center'>
                                <div className='character-story'>
                                    <h1 style={{ color: 'white', marginBottom: '2vw' }}>Story:</h1>
                                    <p>{this.state.character.lore}</p>
                                </div>
                            </section>
                        </div>
                    </div>:<h1>Loading...</h1>}
            </>
        )
    }

}

export default KillerInfo