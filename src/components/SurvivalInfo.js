import React, { Component } from 'react';

import ApiDbd from '../api/api.js';

class SurvivalInfo extends Component {
    state = {
        character: {}
    }
    
    componentDidMount = async () => {       
        const result = await ApiDbd.oneSurvival(this.props.match.params._id)

        this.setState({
            character: result.data
        })       
    }
    
    render(){
        return (
            <>
                {this.state.character._id?
                    <div className='page'>
                        <img className='img-left' src={`${this.state.character.icon.shop_background}`} alt={this.state.character.name} />

                        <div className='character-page'>
                            
                            <h1 className='center'>{this.state.character.name}</h1>
                            
                            <div className='center'>
                                {<img src={`${this.state.character.icon.portrait}`} alt={`${this.state.character.name} portrait`} width='150' />}

                                <div className='character-box'>
                                    <h3>{this.state.character.full_name}</h3>
                                    <p>Gender: {this.state.character.gender}</p>
                                    <p>Role: {this.state.character.role}</p>
                                    <p>Nationality: {this.state.character.nationality}</p>
                                    <p>DLC: {this.state.character.dlc}</p>
                                </div>
                            </div>

                            <div className='center'>
                                <div className='character-perk' >
                                    {this.state.character.perks.map( (perk, index) => <h1 index>{perk}</h1> )}
                                </div>

                                <div className='character-story'>
                                    <h2>Story:</h2>
                                    <p>{this.state.character.lore}</p>
                                </div>
                            </div>
                        </div>
                    </div>:<h1>Loading...</h1>
                }
           </>
        )
    }


}

export default SurvivalInfo