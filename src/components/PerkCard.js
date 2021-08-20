import React from 'react';

const PerkCard = (props) => {
    return (
        <div className='character-card'>
            <img src={`${props.icon}`} alt={props.name} width='180'/>
            <h3>{props.perk_name}</h3>
        </div>
    )
}

export default PerkCard