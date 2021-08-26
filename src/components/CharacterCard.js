import React from 'react';

import {
    Card, CardTitle, CardText
} from 'reactstrap';

const CharacterCard = (props) => {
    return (
        <Card className='character-card rounded' body inverse style = {{ backgroundColor: '#333', borderColor: '#333' }}>

            <img src={`${props.icon.preview_portrait}`} alt={props.name} width='150'/>

            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardText>Difficulty: {props.difficulty}</CardText>
        </Card>
    )
}

export default CharacterCard