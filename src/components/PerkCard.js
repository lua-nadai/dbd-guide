import React from 'react';


export const PerkCard = (props) => {
    return (
        <>        
            <div className="perk-card" data-toggle="tooltip"
                title={
                    `-  
        Role: ${props.role}

        Character Name: ${props.name}

        Perk Name: ${props.perk_name}
        
        Description: ${props.description}`}>

                <img src={`${props.icon}`} alt={props.name} width='180' />
                <h3>{props.perk_name}</h3>


            </div>
            
        </>
    )
}
