import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CharacterCreate = (props) => {
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [yourclass, setYourclass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost.5000/user/create/',{
        method: 'POST',
        body: JSON.stringify({log: {name: name, race:race, yourclass: yourclass}}),
        headers: new Headers({
            'Content-Type' : 'application/json',
            'Authorization': props.token
        })
    })
    .then((res) => res.json())
    .then((charData) => {
        console.log(charData);
        setName('');
        setRace('');
        setYourclass('')
        props.fetchCharacters();
    })
    }
    
    return (
     <div>
        <h3> Create a Character </h3>
        <Form>
            <FormGroup>
                <Label htmlFor="name"/>
                <Input name = "name" value={name} onChange={(e) => setName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="race"/>
            <Input type="select" name = "race" value={race} onChange={(e) => setRace(e.target.value)}>
                <option value="Elf">Elf</option>
                <option value="Human">Human</option>
                <option value="Dwarf">Dwarf</option>
            </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="yourclass"/>
                <Input name = "yourclass" value={yourclass} onChange={(e) => setYourclass(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Save Character</Button>
 
        </Form>
        </div>
)
}

export default CharacterCreate; 