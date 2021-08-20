import React from 'react'

const CharacterCard = (props) => {
    return (
        <div className='character-card'>
            <img src={`${props.icon.preview_portrait}`} alt={props.name} width='150' />
            <h3>Name: {props.name}</h3>
            <h3>Difficulty: {props.difficulty}</h3>
        </div>
    )
}

export default CharacterCard