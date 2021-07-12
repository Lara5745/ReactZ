import React from 'react';
import { Button,Image,Modal } from 'semantic-ui-react';

const DetailMovie=({detail,showDetail,setShowDetail})=> {
    console.log("EstaTUS",showDetail)
    return (
        <>
            <Modal
            onClose={() => setShowDetail(false)}
            onOpen={() => setShowDetail(true)}
            open={showDetail}>
                <Modal.Header>{detail.name}</Modal.Header>
                <Modal.Content image>
                <Image size="medium" src={detail.image} wrapped />
                    <Modal.Description>
                        <p>Nombre : <b>{detail.name}</b></p>
                        {/* <p>Origen : <b>{detail.origin.name}</b></p> */}
                        <p>Estatus : <b>{detail.status}</b></p>
                        <p>Especie : <b>{detail.species}</b></p>
                        <p>Estatus : <b>{detail.gender}</b></p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        onClick={() => setShowDetail(false)}
                        color="red"
                        inverted
                    >
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </>)
    
};

export default  DetailMovie;