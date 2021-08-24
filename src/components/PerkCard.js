import React from 'react';

export const PerkCard = (props) => {
    return (
        <div className='character-card'>
            <img src={`${props.icon}`} alt={props.name}/>
            <h3>Name: {props.name}</h3>
        </div>
    )
}

export const PerkInfo = (props) => {
    return (
        <a className='content'>
            <img src={`${props.icon}`} alt={props.perk_name}/>
            <span>Role: {props.role}</span>
            <span>Character Name: {props.name}</span>
            <span>Perk Name: {props.perk_name}</span>
            <span>Description: {props.description}</span>
        </a>
    )
}

