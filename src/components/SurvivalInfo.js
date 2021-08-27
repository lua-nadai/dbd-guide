import React, { Component } from 'react';

import ApiDbd from '../api/api.js';

class SurvivalInfo extends Component {
    state = {
        character: {},
        perks: {}
    }
    
    componentDidMount = async () => {   

        const survival = await ApiDbd.oneSurvival(this.props.match.params._id)
        const perks = await ApiDbd.perks()

        this.setState({
            character: survival.data,
            perks: perks.data
        })       
    }

    findPerk = (perk, character) => {
        const characterPerks = {}

        if(perk.name === character.name){
            return this.state.perk_name
        }
    }
    
    render(){
        return (
            <>
                {this.state.character._id?
                    <div className='page'>
                        
                        <img className='img-left' src={`${this.state.character.icon.shop_background}`} alt={this.state.character.name} />

                        <div className='home-page'>
                            
                            <h1 className='character-title center'>{this.state.character.name}</h1>

                            <section className='section-character'>
                                <div className='character-container-perk' >
                                    {console.log(this.findPerk('Adrenaline', 'Meg Thomas'))}

                                    {this.state.character.perks.map((perk, index) => 
                                        <div className='character-perk'>
                                            <img/>
                                            <h1 index>{perk}</h1> 
                                            <h2>Teach Level: {}</h2>
                                        </div> 
                                    )}
                                    
                                </div>

                                <div className='center character-info'>
                                    {<img src={`${this.state.character.icon.portrait}`} alt={`${this.state.character.name} portrait`} width='150' />}

                                    <div className='character-box'>
                                        <h3>{this.state.character.full_name}</h3>
                                        <p>Gender: {this.state.character.gender}</p>
                                        <p>Role: {this.state.character.role}</p>
                                        <p>Nationality: {this.state.character.nationality}</p>
                                        <p>DLC: {this.state.character.dlc}</p>
                                    </div>
                                </div>
                            </section>

                            <section className='center'>
                                <div className='character-story'>
                                    <h1>Story:</h1>
                                    <p>{this.state.character.lore}</p>
                                </div>
                            </section>
                        </div>
                    </div>:<h1>Loading...</h1>
                }
           </>
        )
    }


}

export default SurvivalInfo