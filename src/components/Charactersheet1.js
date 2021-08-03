import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Table } from "reactstrap";

import CharacterCreate from './CharacterCreate';
import CharacterTable from './CharacterTable';
import CharacterUpdate from './CharacterUpdate';

const CharactersSheet = (props) => {
    const [characters, setCharacters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [characterToUpdate, setCharacterToUpdate] = useState({});
    const fetchCharacters = () => {
        fetch('http://localhost:5000/sheet', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
        .then((charData) => {
            setCharacters(charData)
        })
    }

    const editUpdateCharacters = (character) => {
        setCharacterToUpdate(character);
    }
    const updateOn= () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }


    useEffect(() => {
        fetchCharacters();
    }, [])


    /*Fun Stuff*/
    return (
        <Container>
        <Row>
            <Col md="3">
                <CharacterCreate fetchCharacters={fetchCharacters} token={props.token}/>
            </Col>
            <Col md="9">
                 <CharacterTable characters={characters} editUpdateCharacters ={editUpdateCharacters}
            updateOn={updateOn} fetchCharacters={fetchCharacters} token={props.token}/>
            </Col>
            {updateActive ? <CharacterUpdate CharacterToUpdate= {characterToUpdate}
            updateOff={updateOff} token={props.token} fetchCharacters={fetchCharacters}/> : <> </>}
        </Row>
    </Container>
    )
}

export default CharactersSheet;