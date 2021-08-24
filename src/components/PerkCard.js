import React from 'react';

export const PerkCard = (props) => {
    return (
        <div className='character-card'>
            <img src={`${props.icon}`} alt={props.name} width='180'/>
            <h3>{props.perk_name}</h3>
        </div>
    )
}

export const PerkInfo = (props) => {
    return (
        <div>
            <span>Role: {props.role}</span>
            <span>Character Name: {props.name}</span>
            <span>Perk Name: {props.perk_name}</span>
            <span>Description: {props.description}</span>
        </div>
    )
}

