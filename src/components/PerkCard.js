import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const PerkCard = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <>
            <Button className='perk-format' onClick={toggle}>
                
                <div className="perk-card" >
                    <img src={`${props.icon}`} alt={props.name} width='180' />
                    <h3>{props.perk_name}</h3>
                </div>
            </Button>
                <div>

                <Modal className="modal-dialog modal-lg" isOpen={modal} toggle={toggle}  >
                    <ModalHeader><h1>{props.perk_name}</h1></ModalHeader>
                        <ModalBody>
                            <h2>Role: {props.role}</h2><br/>
                            <h2>Perk Name: {props.perk_name}</h2><br/>
                            <h2>Character Name: <a href='#'>{props.name}</a></h2><br/>
                            <h2>Teach Leve: {props.teach_level}</h2><br/>
                            <h2>Description:<br/>{props.description}</h2><br/>
                        </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                 </Modal>
                </div>

        </>
    )
}