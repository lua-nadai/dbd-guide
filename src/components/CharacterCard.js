import React from 'react';

import {
    Card, CardTitle, CardText
} from 'reactstrap';

const CharacterCard = (props) => {
    return (
        <Card className='character-card rounded' body inverse style = {{ backgroundColor: '#333', borderColor: '#333' }}>
            <img src={`${props.icon.preview_portrait}`} alt={props.name} />
            <CardTitle tag='h2'>{props.name}</CardTitle>
            <CardText tag='h5'>Difficulty: {props.difficulty}</CardText>
        </Card>
    )
}

export default CharacterCard