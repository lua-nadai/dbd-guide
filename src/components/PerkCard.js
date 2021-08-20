import React from 'react';

const PerkCard = (props) => {
    return (
        <div className='character-card'>
            <img src={`${props.icon}`} alt={props.name}/>
            <h3>Name: {props.name}</h3>
        </div>
    )
}

export default PerkCard