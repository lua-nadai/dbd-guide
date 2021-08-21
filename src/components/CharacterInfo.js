import React, { Component } from 'react';


class CharacterInfo extends Component {
    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                
                <h1>{this.props.match.params._id}</h1>

                <img src='' alt={`${this.props.name} portrait`}/>
                
                <div>
                    {/* <p>{props.perks[0]}</p>
                    <p>{props.perks[1]}</p>
                    <p>{props.perks[2]}</p> */}
                </div>

                {/* <div>
                    <h3>{props.full_name}</h3>
                    <p>{props.gender}</p>
                    <p>{props.role}</p>
                    <p>{props.nationality}</p>
                    <p>{props.dlc}</p>
                </div>
                
                <div>
                    <h2>Story:</h2>
                    <p>{props.lore}</p>
                </div> */}
            </>
        )
    }
}

export default CharacterInfo