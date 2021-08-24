import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid black;
  width: 20vw;
  height: 28vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const CharacterCard = (props) => {
    return (
        <Card>
            <img src={`${props.icon.preview_portrait}`} alt={props.name} width='150' />
            <h3>{props.name}</h3>
            <h3>Difficulty: {props.difficulty}</h3>
        </Card>
    )
}

export default CharacterCard