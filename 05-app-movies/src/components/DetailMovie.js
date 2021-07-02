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
                <Modal.Header>{detail.Title}</Modal.Header>
                <Modal.Content image>
                <Image size="medium" src={detail.Poster} wrapped />
                    <Modal.Description>
                        <p>Actors : {detail.Actors}</p>
                        <p>Country : {detail.Country}</p>
                        <p>Released : {detail.Released}</p>
                        <p>Director : {detail.Director}</p>
                        <p>Genre : {detail.Genre}</p>
                        <p>Production : {detail.Production}</p>
                        <p>Runtime : {detail.Runtime}</p>
                        <p>Rated : {detail.Rated}</p>
                        <p>Year : {detail.Year}</p>
                        <p>DVD : {detail.DVD}</p>
                        <p>Writer : {detail.Writer}</p>
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